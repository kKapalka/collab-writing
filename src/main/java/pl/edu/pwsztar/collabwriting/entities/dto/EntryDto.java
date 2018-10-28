package pl.edu.pwsztar.collabwriting.entities.dto;

import pl.edu.pwsztar.collabwriting.entities.Entry;

public class EntryDto {

    private Long entryId;
    private Long authorId;
    private String authorName;
    private Long storyId;
    private String storyTitle;
    private String entryText;

    public EntryDto(Entry entry){
        this.entryId=entry.getEntryId();
        this.authorId=entry.getAuthor().getUserId();
        this.authorName=entry.getAuthor().getLogin();
        this.storyId=entry.getStory().getStoryId();
        this.storyTitle=entry.getStory().getTitle();
        this.entryText=entry.getEntryText();
    }
}
