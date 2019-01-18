package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Comment;

@Data
public class CommentDto {

    private Long commentId;
    private String authorName; //wymagane
    private String storyTitle; // wymagane
    private String commentText; //wymagane
    private String commentTime;
    private boolean approved;

    public CommentDto(Comment comment){
        this.commentId=comment.getId();
        this.authorName=comment.getAuthor()!=null ? comment.getAuthor().getLogin() : null;
        this.storyTitle=comment.getStory()!=null ? comment.getStory().getTitle() : null;
        this.commentText=comment.getCommentText();
        this.commentTime=comment.getCommentTime().toString();
        this.approved=comment.getApproved();
    }
}
