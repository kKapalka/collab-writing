package pl.edu.pwsztar.collabwriting.entities.dto;

import java.util.List;

public class UserDto {

    private Long userId;
    private String login;
    private String password;
    private String email;
    private List<RoleDto> roleDtoList;
}
