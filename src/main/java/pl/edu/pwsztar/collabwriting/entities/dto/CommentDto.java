package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Comment;

@Data
public class CommentDto {

    private Long commentId;
    private String authorName;
    private String storyTitle;
    private String commentText;
    private String commentTime;

    public CommentDto(Comment comment){
        this.commentId=comment.getId();
        this.authorName=comment.getAuthor()!=null ? comment.getAuthor().getLogin() : null;
        this.storyTitle=comment.getStory()!=null ? comment.getStory().getTitle() : null;
        this.commentText=comment.getCommentText();
        this.commentTime=comment.getCommentTime().toString();
    }
}
