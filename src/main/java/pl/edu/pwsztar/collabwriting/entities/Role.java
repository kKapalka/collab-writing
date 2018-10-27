package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name="ROLES")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ROLE_ID")
    private Long roleId;
    @Column(name="ROLE")
    private String role;
}
