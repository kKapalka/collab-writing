package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Issue;

@Data
public class IssueDto {

    private Long issueId;
    private Long authorId;
    private String authorName;
    private Long storyId;
    private String storyTitle;
    private String issueTitle;
    private String issueStatus;
    private String description;
    private Long assignedAuthorId;
    private String assignedAuthorIdName;

    public IssueDto(Issue issue){
        this.issueId=issue.getIssueId();
        this.authorId=issue.getAuthor().getUserId();
        this.authorName=issue.getAuthor().getLogin();
        this.storyId=issue.getStory().getStoryId();
        this.storyTitle=issue.getStory().getTitle();
        this.issueTitle=issue.getTitle();
        this.issueStatus=issue.getIssueStatus().name();
        this.description=issue.getDescription();
        this.assignedAuthorId=issue.getAssigned().getUserId();
        this.assignedAuthorIdName=issue.getAssigned().getLogin();
    }

}
