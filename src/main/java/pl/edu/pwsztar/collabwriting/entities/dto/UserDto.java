package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.User;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class UserDto {

    private Long userId;
    private String login;
    private String password;
    private String email;
    private List<String> userRoleList;

    public UserDto(User user){
        this.userId=user.getUserId();
        this.login=user.getLogin();
        this.password=user.getPassword();
        this.email=user.getEmail();
        this.userRoleList=user.getRoles().stream().map(Enum::name).collect(Collectors.toList());
    }

}
