package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name="ISSUES")
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ISSUE_ID")
    private Long issueId;

    @ManyToOne
    @JoinColumn(name="AUTHOR_ID")
    private User author;

    @ManyToOne
    @JoinColumn(name="STORY_ID")
    private Story story;

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
