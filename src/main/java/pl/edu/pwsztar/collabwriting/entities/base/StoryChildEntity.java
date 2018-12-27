package pl.edu.pwsztar.collabwriting.entities.base;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.User;

import javax.persistence.*;

@Data
@NoArgsConstructor
@MappedSuperclass
public abstract class StoryChildEntity extends BaseEntity {

    @ManyToOne
    @JoinColumn(name="STORY_ID", nullable = false)
    private Story story;
}
