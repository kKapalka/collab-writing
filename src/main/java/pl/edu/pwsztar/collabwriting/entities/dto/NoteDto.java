package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Note;

@Data
public class NoteDto {

    private Long noteId;
    private String authorName;
    private String storyTitle;
    private String noteData;

    public NoteDto(Note note){
        this.noteId=note.getNoteId();
        this.authorName=note.getAuthor().getLogin();
        this.storyTitle=note.getStory().getTitle();
        this.noteData=note.getNoteData();
    }

}
