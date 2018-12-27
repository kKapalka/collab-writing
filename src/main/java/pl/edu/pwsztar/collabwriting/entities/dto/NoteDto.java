package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Note;

@Data
public class NoteDto {

    private Long noteId;
    private String authorName; //wymagane
    private String storyTitle; //wymagane
    private String noteData; //wymagane

    public NoteDto(Note note){
        this.noteId=note.getId();
        this.authorName=note.getAuthor().getLogin();
        this.storyTitle=note.getStory().getTitle();
        this.noteData=note.getNoteData();
    }

}
