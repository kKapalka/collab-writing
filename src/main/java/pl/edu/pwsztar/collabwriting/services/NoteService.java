package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Note;
import pl.edu.pwsztar.collabwriting.entities.dto.NoteDto;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;
import pl.edu.pwsztar.collabwriting.messages.ResponseMessage;
import pl.edu.pwsztar.collabwriting.repositories.NoteRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.repositories.WriterRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private WriterService writerService;

    public NoteDto save(NoteDto dto){
        Note note = updateNote(dto);
        return new NoteDto(noteRepository.save(note));
    }

    private Note updateNote(NoteDto dto){
        Note note = new Note();
        if(dto.getNoteId()!=null){
            note = noteRepository.findById(dto.getNoteId()).get();
        }
        note.setNoteData(dto.getNoteData());
        note.setAuthor(userRepository.findByLogin(dto.getAuthorName()).get());
        note.setStory(storyRepository.getStoryByTitle(dto.getStoryTitle()).get());
        return note;
    }

    public List<NoteDto> getALlNotes(){
        return noteRepository.findAll().stream().map(NoteDto::new).collect(Collectors.toList());
    }
    public List<NoteDto> getByStoryId(Long id){
        return noteRepository.getAllByStory(storyRepository.findById(id).orElseThrow(EntityNotFoundException::new))
                .stream().map(NoteDto::new).collect(Collectors.toList());
    }

    public ResponseEntity<?> approveByIdWithCredentials(Long id, String username){
        Note note = noteRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if(writerService.checkIfUserIsModeratorForStory(username,note.getStory())){
            note.setApproved(true);
            noteRepository.save(note);
            writerService.attemptApplyRole(note.getAuthor(),note.getStory(), WriterRole.WRITER);
            return new ResponseEntity<>(new ResponseMessage("Note approved by user "+username+"!"), HttpStatus.OK);
        } else{
            return new ResponseEntity<>(new ResponseMessage(""+username+" is not a moderator for this story!"), HttpStatus.BAD_REQUEST);
        }
    }

}
