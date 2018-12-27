package pl.edu.pwsztar.collabwriting.entities;


import lombok.Data;
import lombok.NoArgsConstructor;
import pl.edu.pwsztar.collabwriting.entities.base.BaseEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name="STORIES")
public class Story extends BaseEntity {

    @Column(name="TITLE")
    private String title;

    @OneToMany(mappedBy = "story")
    private List<Writer> writers;

    @OneToMany(mappedBy = "story")
    private List<Entry> entries;

    @OneToMany(mappedBy = "story")
    private List<Issue> issues;

    @OneToMany(mappedBy = "story")
    private List<Comment> comments;

    @OneToMany(mappedBy = "story")
    private List<Note> notes;

}
