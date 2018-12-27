package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.NoteDto;
import pl.edu.pwsztar.collabwriting.services.NoteService;

import java.util.List;

@RestController
@RequestMapping("/note")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @PostMapping("/save")
    public NoteDto save(@RequestBody NoteDto dto){
        return noteService.save(dto);
    }

    @GetMapping("/all")
    public List<NoteDto> getAll(){
        return noteService.getALlNotes();
    }

    @GetMapping("/story/{id}")
    public List<NoteDto> getByStoryId(@PathVariable Long id){
        return noteService.getByStoryId(id);
    }

    @PostMapping("/{id}/approve")
    public ResponseEntity<?> approve(@PathVariable Long id, @RequestHeader("user") String username){
        return noteService.approveByIdWithCredentials(id,username);
    }
}
