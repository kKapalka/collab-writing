package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Entry;

@Data
public class EntryDto {

    private Long entryId;
    private String authorName; //wymagane
    private String storyTitle; //wymagane
    private String entryText; //wymagane

    public EntryDto(Entry entry){
        this.entryId=entry.getId();
        this.authorName=entry.getAuthor().getLogin();
        this.storyTitle=entry.getStory().getTitle();
        this.entryText=entry.getEntryText();
    }
}
