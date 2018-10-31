package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Comment;

@Data
public class CommentDto {

    private Long commentId;
    private Long authorId;
    private String authorName;
    private Long storyId;
    private String storyTitle;
    private String commentText;
    private String commentTime;

    public CommentDto(Comment comment){
        this.commentId=comment.getCommentId();
        this.authorId=comment.getAuthor()!=null ? comment.getAuthor().getUserId() : null;
        this.authorName=comment.getAuthor()!=null ? comment.getAuthor().getLogin() : null;
        this.storyId=comment.getStory()!=null ? comment.getStory().getStoryId() : null;
        this.storyTitle=comment.getStory()!=null ? comment.getStory().getTitle() : null;
        this.commentText=comment.getCommentText();
        this.commentTime=comment.getCommentTime().toString();
    }
}
