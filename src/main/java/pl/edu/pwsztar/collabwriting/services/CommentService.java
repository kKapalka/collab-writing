package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Comment;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.Writer;
import pl.edu.pwsztar.collabwriting.entities.dto.CommentDto;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;
import pl.edu.pwsztar.collabwriting.messages.ResponseMessage;
import pl.edu.pwsztar.collabwriting.repositories.CommentRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.repositories.WriterRepository;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private WriterRepository writerRepository;

    @Autowired
    private WriterService writerService;

    public CommentDto save(CommentDto dto){
        Comment comment = updateComment(dto);
        return new CommentDto(commentRepository.save(comment));
    }
    private Comment updateComment(CommentDto dto){
        Comment comment = new Comment();
        if(dto.getCommentId()!=null){
            comment = commentRepository.findById(dto.getCommentId()).get();
        }
        comment.setCommentText(dto.getCommentText());
        comment.setCommentTime(dto.getCommentTime()!=null?LocalDateTime.parse(dto.getCommentTime()):LocalDateTime.now());
        comment.setAuthor(userRepository.findByLogin(dto.getAuthorName()).get());
        comment.setStory(storyRepository.getStoryByTitle(dto.getStoryTitle()).get());
        return comment;
    }

    public List<CommentDto> getAllComments(){
        return commentRepository.findAll().stream().map(CommentDto::new).collect(Collectors.toList());
    }
    public List<CommentDto> getByStoryId(Long id){
        return commentRepository.getAllByStory(storyRepository.findById(id).orElseThrow(EntityNotFoundException::new))
                .stream().map(CommentDto::new).collect(Collectors.toList());
    }
    public ResponseEntity<?> approveByIdWithCredentials(Long id, String username){
        Comment comment = commentRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if(writerService.checkIfUserIsModeratorForStory(username,comment.getStory())){
            comment.setApproved(true);
            commentRepository.save(comment);
            writerService.attemptApplyRole(comment.getAuthor(),comment.getStory(),WriterRole.BETAREADER);
            return new ResponseEntity<>(new ResponseMessage("Comment approved by user "+username+"!"), HttpStatus.OK);
        } else{
            return new ResponseEntity<>(new ResponseMessage(""+username+" is not a moderator for this story!"), HttpStatus.BAD_REQUEST);
        }
    }
}
