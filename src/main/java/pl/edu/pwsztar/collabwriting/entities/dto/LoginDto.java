package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;

@Data
public class LoginDto {
    private String login; //wymagane
    private String password; //wymagane
}
