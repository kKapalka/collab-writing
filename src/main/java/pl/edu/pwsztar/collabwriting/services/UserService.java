package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.UserRole;
import pl.edu.pwsztar.collabwriting.entities.dto.UserDto;
import pl.edu.pwsztar.collabwriting.model.CustomUserDetails;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;

import javax.management.relation.Role;
import javax.persistence.EntityNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public UserDto save(UserDto dto){
        User user = updateUser(dto);
        return new UserDto(userRepository.save(user));
    }
    public UserDto getCurrentUser(){
        return new UserDto((User)SecurityContextHolder.getContext().getAuthentication().getPrincipal());
    }
    private User updateUser(UserDto dto){
        User user;
        if(dto.getUserId()!=null){
            user=userRepository.findById(dto.getUserId()).orElseThrow(EntityNotFoundException::new);
        } else{
            user=new User();
        }
        user.setLogin(dto.getLogin());
        user.setPassword(dto.getPassword());
        user.setEmail(dto.getEmail());
        if(dto.getUserRoleList()!=null){
            List<UserRole> roleList = dto.getUserRoleList().stream().map(UserRole::valueOf).collect(Collectors.toList());
            if(!dto.getUserRoleList().contains("USER")){
                roleList.add(UserRole.USER);
            }
            user.setRoles(roleList);
        } else{
            user.setRoles(Arrays.asList(UserRole.USER));
        }

        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new CustomUserDetails(userRepository.findByLogin(username)
                .orElseThrow(()->new UsernameNotFoundException("User not found.")));
    }
}
