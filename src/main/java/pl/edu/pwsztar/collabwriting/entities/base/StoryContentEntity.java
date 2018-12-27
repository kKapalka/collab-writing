package pl.edu.pwsztar.collabwriting.entities.base;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.User;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

@Data
@NoArgsConstructor
@MappedSuperclass
public abstract class StoryContentEntity extends StoryChildEntity {

    @ManyToOne
    @JoinColumn(name="AUTHOR_ID")
    private User author;

    @Column(name="APPROVED", nullable = false)
    private Boolean approved = false;

}
