package pl.edu.pwsztar.collabwriting.entities;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="ENTRIES")
public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ENTRY_ID")
    private Long entryId;

    @ManyToOne
    @JoinColumn(name="AUTHOR_ID")
    private User author;

    @ManyToOne
    @JoinColumn(name="STORY_ID")
    private Story story;

    @Column(name="ENTRY_TEXT")
    private String entryText;

}
