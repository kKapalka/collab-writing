package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.IssueDto;
import pl.edu.pwsztar.collabwriting.services.IssueService;

import java.util.List;

@RestController
@RequestMapping("/issue")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @PostMapping("/save")
    public IssueDto save(@RequestBody IssueDto dto){
        return issueService.save(dto);
    }

    @GetMapping("/all")
    public List<IssueDto> getAll(){
        return issueService.getAllIssues();
    }

    @GetMapping("/story/{id}")
    public List<IssueDto> getByStoryId(@PathVariable Long id){
        return issueService.getByStoryId(id);
    }

    @PostMapping("/{id}/approve")
    public ResponseEntity<?> approve(@PathVariable Long id, @RequestHeader("user") String username){
        return issueService.approveByIdWithCredentials(id,username);
    }
}
