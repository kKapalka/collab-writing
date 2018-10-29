package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name="WRITERS")
public class Writer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="WRITER_ID")
    private Long writerId;

    @OneToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name="STORY_ID")
    private Story story;

    @ElementCollection
    @Column(name="WRITER_ROLE")
    @Enumerated(EnumType.STRING)
    private List<WriterRole> writerRoles;

}
