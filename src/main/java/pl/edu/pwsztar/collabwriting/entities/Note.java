package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.base.StoryChildEntity;
import pl.edu.pwsztar.collabwriting.entities.base.StoryContentEntity;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name="NOTES")
public class Note extends StoryContentEntity {

    @Column(name="NOTE_DATA")
    private String noteData;

}
