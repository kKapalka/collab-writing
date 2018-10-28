package pl.edu.pwsztar.collabwriting.entities.dto;

import pl.edu.pwsztar.collabwriting.entities.Role;

public class RoleDto {

    public Long roleId;
    public String roleName;

    public RoleDto(Role role){
        this.roleId=role.getRoleId();
        this.roleName=role.getRole();
    }
}
