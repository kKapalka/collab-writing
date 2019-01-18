package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.EntryDto;
import pl.edu.pwsztar.collabwriting.services.EntryService;

import java.util.List;

@RequestMapping("/entry")
@RestController
@CrossOrigin
public class EntryController {

    @Autowired
    private EntryService entryService;

    @PostMapping("/save")
    public EntryDto save(@RequestBody EntryDto dto){
        return entryService.save(dto);
    }

    @GetMapping("/all")
    public List<EntryDto> getAll(){
        return entryService.getAllEntries();
    }

    @GetMapping("/story/{id}")
    public List<EntryDto> getByStoryId(@PathVariable Long id){
        return entryService.getByStoryId(id);
    }

    @PostMapping("/{id}/approve")
    public ResponseEntity<?> approve(@PathVariable Long id, @RequestHeader("user") String username){
        return entryService.approveByIdWithCredentials(id,username);
    }
}
