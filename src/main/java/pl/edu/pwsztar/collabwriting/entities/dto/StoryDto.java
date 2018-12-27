package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class StoryDto {

    public Long storyId;
    public String title;
    public List<Long> authorIdList;
    public List<Long> commentIdList;
    public List<Long> issueIdList;
    public List<Long> entryIdList;
    public List<Long> noteIdList;

    public StoryDto(Story story){
        this.storyId=story.getId();
        this.title=story.getTitle();
        this.authorIdList=story.getWriters()!=null ?
                story.getWriters().stream().map(Writer::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.issueIdList=story.getIssues()!=null?
                story.getIssues().stream().map(Issue::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.commentIdList=story.getComments()!=null?
                story.getComments().stream().map(Comment::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.entryIdList=story.getEntries()!=null?
                story.getEntries().stream().map(Entry::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.noteIdList=story.getNotes()!=null?
                story.getNotes().stream().map(Note::getId).collect(Collectors.toList())
                : new ArrayList<>();
    }

}
