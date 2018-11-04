package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Issue;
import pl.edu.pwsztar.collabwriting.entities.IssueStatus;
import pl.edu.pwsztar.collabwriting.entities.dto.IssueDto;
import pl.edu.pwsztar.collabwriting.repositories.IssueRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;

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
        issue.setAuthor(userRepository.findById(dto.getAuthorId()).get());
        issue.setAssigned(userRepository.findById(dto.getAssignedAuthorId()).get());
        issue.setStory(storyRepository.findById(dto.getStoryId()).get());
        return issue;
    }

    public List<IssueDto> getAllIssues(){
        return issueRepository.findAll().stream().map(IssueDto::new).collect(Collectors.toList());
    }

}
