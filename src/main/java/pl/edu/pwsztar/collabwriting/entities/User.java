package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="USER_ID")
    private Long userId;

    @Column(name="LOGIN")
    private String login;

    @Column(name="PASSWORD")
    private String password;

    @Column(name="EMAIL")
    private String email;

    @Column(name="ACTIVE")
    private Boolean active;

    @OneToMany
    @JoinTable(name = "USER_ROLE", joinColumns = @JoinColumn(name = "USER_ID"), inverseJoinColumns = @JoinColumn(name = "ROLE_ID"))
    private List<Role> roles;

    public User(User user){
        this.login=user.getLogin();
        this.password=user.getPassword();
        this.email=user.getEmail();
        this.active=user.getActive();
        this.roles=user.getRoles();
        this.userId=user.getUserId();
    }
}
