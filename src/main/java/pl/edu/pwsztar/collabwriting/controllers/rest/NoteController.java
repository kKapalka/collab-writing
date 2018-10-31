package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwsztar.collabwriting.entities.dto.NoteDto;
import pl.edu.pwsztar.collabwriting.services.NoteService;

@RestController
@RequestMapping("/story")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @PostMapping("/save")
    public NoteDto save(@RequestBody NoteDto dto){
        return noteService.save(dto);
    }
}
