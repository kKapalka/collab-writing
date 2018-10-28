package pl.edu.pwsztar.collabwriting.entities;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="STORIES")
public class Story {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="STORY_ID")
    private Long storyId;

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

}
