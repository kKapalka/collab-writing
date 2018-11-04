package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Note;
import pl.edu.pwsztar.collabwriting.entities.dto.NoteDto;
import pl.edu.pwsztar.collabwriting.repositories.NoteRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.repositories.WriterRepository;

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
        note.setAuthor(userRepository.findById(dto.getAuthorId()).get());
        note.setStory(storyRepository.findById(dto.getStoryId()).get());
        return note;
    }

    public List<NoteDto> getALlNotes(){
        return noteRepository.findAll().stream().map(NoteDto::new).collect(Collectors.toList());
    }

}
