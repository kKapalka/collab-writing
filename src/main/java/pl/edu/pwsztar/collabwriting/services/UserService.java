package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.dto.UserDto;
import pl.edu.pwsztar.collabwriting.exceptions.EmailExistsException;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.services.interfaces.IUserService;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

@Service
@Transactional
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    @Override
    public User registerNewUserAccount(UserDto accountDto)
            throws EmailExistsException {

        if (emailExist(accountDto.getEmail())) {
            throw new EmailExistsException(
                    "There is an account with that email address:"  + accountDto.getEmail());
        }
        User user = new User();
        user.setLogin(accountDto.getLogin());
        user.setPassword(accountDto.getPassword());
        user.setEmail(accountDto.getEmail());
        return userRepository.save(user);
    }
    private boolean emailExist(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return true;
        }
        return false;
    }
    public User getUserById(Long id){
        return userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public User getUserByLogin(String login){
        return userRepository.findByLogin(login).orElseThrow(EntityNotFoundException::new);
    }

}
