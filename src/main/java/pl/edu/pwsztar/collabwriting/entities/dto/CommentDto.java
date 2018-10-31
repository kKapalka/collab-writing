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
        this.authorId=comment.getAuthor().getUserId();
        this.authorName=comment.getAuthor().getLogin();
        this.storyId=comment.getStory().getStoryId();
        this.storyTitle=comment.getStory().getTitle();
        this.commentText=comment.getCommentText();
        this.commentTime=comment.getCommentTime().toString();
    }
}
