package pl.edu.pwsztar.collabwriting.controllers.modelandview.helperclasses;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import pl.edu.pwsztar.collabwriting.entities.User;

@Controller
public abstract class PortalController {

    public ModelAndView userPage(String templateUrl){
        User loggedUser = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return new ModelAndView(templateUrl,"user",loggedUser);
    }
}
