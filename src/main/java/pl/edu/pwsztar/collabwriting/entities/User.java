package pl.edu.pwsztar.collabwriting.entities;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.base.BaseEntity;
import pl.edu.pwsztar.collabwriting.entities.enums.UserRole;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name="USERS")
public class User extends BaseEntity {

    @Column(name="LOGIN")
    private String login;

    @Column(name="PASSWORD")
    private String password;

    @Column(name="EMAIL")
    private String email;

    @Column(name="ACTIVE")
    private Boolean active;

    @ElementCollection(fetch=FetchType.EAGER)
    @Column(name="USER_ROLE")
    @Enumerated(EnumType.STRING)

    private List<UserRole> roles;

    public User(User user){
        this.login=user.getLogin();
        this.password=user.getPassword();
        this.email=user.getEmail();
        this.active=user.getActive();
        this.roles=user.getRoles();
        this.setId(user.getId());
    }
    public User(){

    }
}
