package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="COMMENTS")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="COMMENT_ID")
    private Long commentId;

    @ManyToOne
    @JoinColumn(name="AUTHOR_ID")
    private User author;

    @ManyToOne
    @JoinColumn(name="STORY_ID")
    private Story story;

    @Column(name="COMMENT_TEXT")
    private String commentText;

    @Column(name="COMMENT_TIME")
    private LocalDateTime commentTime;
}
