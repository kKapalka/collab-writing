package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwsztar.collabwriting.entities.Issue;
import pl.edu.pwsztar.collabwriting.entities.IssueStatus;
import pl.edu.pwsztar.collabwriting.entities.dto.IssueDto;
import pl.edu.pwsztar.collabwriting.services.IssueService;

@RestController
@RequestMapping("/issue")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @PostMapping("/save")
    public IssueDto save(@RequestBody IssueDto dto){
        return issueService.save(dto);
    }
}
