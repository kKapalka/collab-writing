package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Issue;
import pl.edu.pwsztar.collabwriting.entities.enums.IssueStatus;
import pl.edu.pwsztar.collabwriting.entities.dto.IssueDto;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;
import pl.edu.pwsztar.collabwriting.messages.ResponseMessage;
import pl.edu.pwsztar.collabwriting.repositories.IssueRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private WriterService writerService;

    public IssueDto save(IssueDto dto){
        Issue issue = updateIssue(dto);
        return new IssueDto(issueRepository.save(issue));
    }

    private Issue updateIssue(IssueDto dto){
        Issue issue = new Issue();
        if(dto.getIssueId()!=null){
            issue = issueRepository.findById(dto.getIssueId()).get();
        }
        issue.setIssueStatus(IssueStatus.valueOf(dto.getIssueStatus()));
        issue.setDescription(dto.getDescription());
        issue.setTitle(dto.getIssueTitle());
        issue.setAuthor(userRepository.findByLogin(dto.getAuthorName()).get());
        issue.setAssigned(userRepository.findByLogin(dto.getAssignedAuthorName()).get());
        issue.setStory(storyRepository.getStoryByTitle(dto.getStoryTitle()).get());
        return issue;
    }

    public List<IssueDto> getAllIssues(){
        return issueRepository.findAll().stream().map(IssueDto::new).collect(Collectors.toList());
    }
    public List<IssueDto> getByStoryId(Long id){
        return issueRepository.getAllByStory(storyRepository.findById(id).orElseThrow(EntityNotFoundException::new))
                .stream().map(IssueDto::new).collect(Collectors.toList());
    }

    public ResponseEntity<?> approveByIdWithCredentials(Long id, String username){
        Issue issue = issueRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if(writerService.checkIfUserIsModeratorForStory(username,issue.getStory())){
            issue.setApproved(true);
            issueRepository.save(issue);
            writerService.attemptApplyRole(issue.getAuthor(),issue.getStory(), WriterRole.PROOFREADER);
            return new ResponseEntity<>(new ResponseMessage("Issue approved by user "+username+"!"), HttpStatus.OK);
        } else{
            return new ResponseEntity<>(new ResponseMessage(""+username+" is not a moderator for this story!"), HttpStatus.BAD_REQUEST);
        }
    }
}
