package pl.edu.pwsztar.collabwriting.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping({"/index","/"})
    public String index() {
        return "pages/index";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping("/portal/admin")
    public String securedHello() {
        return "Secured Hello";
    }

    @PreAuthorize("hasAnyRole('USER')")
    @GetMapping("/portal")
    public String userHello() {
        return "User-Accessible Hello";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }
}
