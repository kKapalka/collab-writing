package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
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

    @ManyToMany
    @JoinTable(
            name = "WRITER_ROLE",
            joinColumns = { @JoinColumn(name = "WRITER_ID") },
            inverseJoinColumns = { @JoinColumn(name = "ROLE_ID") }
    )
    private List<Role> roles;

}
