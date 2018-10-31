package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name="NOTES")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="NOTE_ID")
    private Long noteId;

    @ManyToOne
    @JoinColumn(name="AUTHOR_ID")
    private User author;

    @ManyToOne
    @JoinColumn(name="STORY_ID")
    private Story story;

    @Column(name="NOTE_DATA")
    private String noteData;

}
