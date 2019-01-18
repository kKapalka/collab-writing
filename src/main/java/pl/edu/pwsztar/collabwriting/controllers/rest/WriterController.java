package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.WriterDto;
import pl.edu.pwsztar.collabwriting.services.WriterService;

import java.util.List;

@RestController
@RequestMapping("/writer")
@CrossOrigin
public class WriterController {

    @Autowired
    private WriterService writerService;

    @PostMapping("/save")
    public WriterDto save(@RequestBody WriterDto dto){
        return writerService.save(dto);
    }

    @GetMapping("/all")
    public List<WriterDto> getAll(){ return writerService.getAllWriters();}

    @GetMapping("/story/{id}")
    public List<WriterDto> getByStoryId(@PathVariable Long id){
        return writerService.getByStoryId(id);
    }

}
