package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.base.StoryChildEntity;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name="WRITERS")
public class Writer extends StoryChildEntity {

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @ElementCollection
    @Column(name="ROLE")
    @Enumerated(EnumType.STRING)
    private List<WriterRole> writerRoles;

}
