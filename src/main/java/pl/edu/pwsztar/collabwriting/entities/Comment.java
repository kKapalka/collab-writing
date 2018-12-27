package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.base.StoryChildEntity;
import pl.edu.pwsztar.collabwriting.entities.base.StoryContentEntity;

import javax.persistence.*;
import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@Table(name="COMMENTS")
public class Comment extends StoryContentEntity {

    @Column(name="COMMENT_TEXT")
    private String commentText;

    @Column(name="COMMENT_TIME")
    private LocalDateTime commentTime;
}
