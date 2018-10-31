package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Comment;
import pl.edu.pwsztar.collabwriting.entities.dto.CommentDto;
import pl.edu.pwsztar.collabwriting.repositories.CommentRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;

import java.time.LocalDateTime;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StoryRepository storyRepository;

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
        comment.setCommentTime(LocalDateTime.parse(dto.getCommentTime()));
        comment.setAuthor(userRepository.findById(dto.getAuthorId()).get());
        comment.setStory(storyRepository.findById(dto.getStoryId()).get());
        return comment;
    }
    
}
