package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.StoryDto;
import pl.edu.pwsztar.collabwriting.services.StoryService;

import java.util.List;

@RequestMapping("/story")
@RestController
public class StoryController {

    @Autowired
    private StoryService storyService;

    @PostMapping("/save")
    public StoryDto save(@RequestBody StoryDto dto, @RequestHeader(value="user", required = false) String user){
        if(user!=null){
            return storyService.create(dto,user);
        } else{
            return storyService.save(dto);
        }
    }

    @GetMapping("/all")
    public List<StoryDto> getAll(){
        return storyService.getAllStories();
    }

}
