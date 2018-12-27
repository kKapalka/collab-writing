package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Issue;

@Data
public class IssueDto {

    private Long issueId;
    private String authorName;
    private String storyTitle;
    private String issueTitle;
    private String issueStatus;
    private String description;
    private String assignedAuthorName;

    public IssueDto(Issue issue){
        this.issueId=issue.getId();
        this.authorName=issue.getAuthor().getLogin();
        this.storyTitle=issue.getStory().getTitle();
        this.issueTitle=issue.getTitle();
        this.issueStatus=issue.getIssueStatus().name();
        this.description=issue.getDescription();
        this.assignedAuthorName=issue.getAssigned().getLogin();
    }

}
