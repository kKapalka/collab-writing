package pl.edu.pwsztar.collabwriting.entities;


import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.base.StoryChildEntity;
import pl.edu.pwsztar.collabwriting.entities.base.StoryContentEntity;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name="ENTRIES")
public class Entry extends StoryContentEntity {

    @Column(name="ENTRY_TEXT")
    private String entryText;

}
