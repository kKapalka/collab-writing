package pl.edu.pwsztar.collabwriting.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwsztar.collabwriting.entities.dto.CommentDto;
import pl.edu.pwsztar.collabwriting.services.CommentService;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/save")
    public CommentDto save(@RequestBody CommentDto dto){
        return commentService.save(dto);
    }

    @GetMapping("/all")
    public List<CommentDto> getAll(){
        return commentService.getAllComments();
    }

    @GetMapping("/story/{id}")
    public List<CommentDto> getByStoryId(@PathVariable Long id,@RequestHeader String user){
        return commentService.getByStoryId(id,user);
    }
    @PostMapping("/{id}/approve")
    public ResponseEntity<?> approve(@PathVariable Long id, @RequestHeader("user") String username){
        return commentService.approveByIdWithCredentials(id,username);
    }
}
