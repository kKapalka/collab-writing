package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Note;

@Data
public class NoteDto {

    private Long noteId;
    private Long authorId;
    private String authorName;
    private Long storyId;
    private String storyTitle;
    private String noteData;

    public NoteDto(Note note){
        this.noteId=note.getNoteId();
        this.authorId=note.getAuthor().getUserId();
        this.authorName=note.getAuthor().getLogin();
        this.storyId=note.getStory().getStoryId();
        this.storyTitle=note.getStory().getTitle();
        this.noteData=note.getNoteData();
    }

}
