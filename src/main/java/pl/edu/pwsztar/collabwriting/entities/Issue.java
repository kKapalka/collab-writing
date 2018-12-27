package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.base.StoryChildEntity;
import pl.edu.pwsztar.collabwriting.entities.base.StoryContentEntity;
import pl.edu.pwsztar.collabwriting.entities.enums.IssueStatus;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name="ISSUES")
public class Issue extends StoryContentEntity {

    @Column(name="TITLE")
    private String title;

    @Column(name="DESCRIPTION")
    private String description;

    @ManyToOne
    @JoinColumn(name="ASSIGNED_ID")
    private User assigned;

    @Column(name="ISSUE_STATUS")
    @Enumerated(EnumType.STRING)
    private IssueStatus issueStatus;
}
