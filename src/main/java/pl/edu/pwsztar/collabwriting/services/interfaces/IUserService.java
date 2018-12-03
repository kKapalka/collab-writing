package pl.edu.pwsztar.collabwriting.services.interfaces;

import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.dto.UserDto;
import pl.edu.pwsztar.collabwriting.exceptions.EmailExistsException;

public interface IUserService {
    User registerNewUserAccount(UserDto accountDto)
            throws EmailExistsException;
}
