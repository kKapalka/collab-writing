package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.session.Session;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.dto.UserDto;
import pl.edu.pwsztar.collabwriting.services.UserService;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public UserDto save(@RequestBody UserDto dto){
        return userService.save(dto);
    }

    @GetMapping("/current")
    public UserDto getCurrentUser(){ return userService.getCurrentUser();}
}
