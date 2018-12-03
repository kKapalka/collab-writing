package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.WriterDto;
import pl.edu.pwsztar.collabwriting.services.WriterService;

import java.util.List;

@RestController
@RequestMapping("/writer")
public class WriterController {

    @Autowired
    private WriterService writerService;

    @PostMapping("/save")
    public WriterDto save(@RequestBody WriterDto dto){
        return writerService.save(dto);
    }

    @GetMapping("/all")
    public List<WriterDto> getAll(){ return writerService.getAllStories();}

}