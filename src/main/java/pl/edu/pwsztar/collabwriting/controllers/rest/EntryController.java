package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.EntryDto;
import pl.edu.pwsztar.collabwriting.services.EntryService;

import java.util.List;

@RequestMapping("/entry")
@RestController
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
}
