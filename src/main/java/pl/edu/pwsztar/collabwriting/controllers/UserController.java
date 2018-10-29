package pl.edu.pwsztar.collabwriting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwsztar.collabwriting.entities.dto.UserDto;
import pl.edu.pwsztar.collabwriting.services.UserService;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public UserDto save(@RequestBody UserDto dto){
        return userService.save(dto);
    }
}
