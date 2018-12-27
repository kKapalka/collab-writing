package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.*;
import pl.edu.pwsztar.collabwriting.annotations.PasswordMatches;
import pl.edu.pwsztar.collabwriting.annotations.ValidEmail;
import pl.edu.pwsztar.collabwriting.entities.User;

import javax.validation.constraints.NotEmpty;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@Data
@PasswordMatches
@AllArgsConstructor
public class UserDto {

    private Long userId;
    private String login; //wymagane
    private String password; //wymagane
    private String matchingPassword; //wymagane
    @ValidEmail
    @NonNull
    @NotEmpty
    private String email; //wymagane
    private List<String> userRoleList;

    public UserDto(User user){
        this.userId=user.getId();
        this.login=user.getLogin();
        this.password=user.getPassword();
        this.email=user.getEmail();
        this.userRoleList=user.getRoles().stream().map(Enum::name).collect(Collectors.toList());
    }
    public UserDto(){

    }

}
