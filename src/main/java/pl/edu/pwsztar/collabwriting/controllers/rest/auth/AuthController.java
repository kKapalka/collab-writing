package pl.edu.pwsztar.collabwriting.controllers.rest.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.dto.LoginDto;
import pl.edu.pwsztar.collabwriting.entities.dto.UserDto;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.messages.JwtResponse;
import pl.edu.pwsztar.collabwriting.messages.ResponseMessage;
import pl.edu.pwsztar.collabwriting.security.jwt.JwtProvider;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDto loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getLogin(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserDto signUpRequest) {
        if (userRepository.findByLogin(signUpRequest.getLogin()).isPresent()) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (userRepository.findByEmail(signUpRequest.getEmail())!=null) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User();
        user.setLogin(signUpRequest.getLogin());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));
        userRepository.save(user);

        return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }
    @PostMapping("/update")
    public ResponseEntity<?> updateUserData(@Valid @RequestBody UserDto modifiedUserData, @RequestHeader("token") String token) {
        User user = userRepository.findByLogin(jwtProvider.getUserNameFromJwtToken(token)).orElseThrow(EntityNotFoundException::new);

        user.setLogin(modifiedUserData.getLogin());
        user.setEmail(modifiedUserData.getEmail());
        user.setPassword(encoder.encode(modifiedUserData.getPassword()));
        userRepository.save(user);

        return new ResponseEntity<>(new ResponseMessage("User modified successfully!"), HttpStatus.OK);
    }

}
