package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.StoryDto;
import pl.edu.pwsztar.collabwriting.services.StoryService;

@RequestMapping("/story")
@RestController
public class StoryController {

    @Autowired
    private StoryService storyService;

    @PostMapping("/save")
    public StoryDto save(@RequestBody StoryDto dto){
        return storyService.save(dto);
    }
}
