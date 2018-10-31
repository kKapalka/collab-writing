package pl.edu.pwsztar.collabwriting.controllers.modelandview;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import pl.edu.pwsztar.collabwriting.controllers.modelandview.helperclasses.PortalController;
import pl.edu.pwsztar.collabwriting.entities.User;

@Controller
public class MainController extends PortalController {

    @GetMapping({"/index","/"})
    public String index() {
        return "pages/index";
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping("/portal/admin")
    public ModelAndView securedHello(){
        return userPage("Secure Hello");
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
