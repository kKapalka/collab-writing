package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwsztar.collabwriting.entities.dto.EntryDto;
import pl.edu.pwsztar.collabwriting.services.EntryService;

@RequestMapping("/entry")
@RestController
public class EntryController {

    @Autowired
    private EntryService entryService;

    @PostMapping("/save")
    public EntryDto save(@RequestBody EntryDto dto){
        return entryService.save(dto);
    }
}
