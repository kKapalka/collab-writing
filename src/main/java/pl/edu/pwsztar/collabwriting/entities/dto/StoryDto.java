package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.*;

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
        this.storyId=story.getStoryId();
        this.title=story.getTitle();
        this.authorIdList=story.getWriters().stream().map(Writer::getWriterId).collect(Collectors.toList());
        this.issueIdList=story.getIssues().stream().map(Issue::getIssueId).collect(Collectors.toList());
        this.commentIdList=story.getComments().stream().map(Comment::getCommentId).collect(Collectors.toList());
        this.entryIdList=story.getEntries().stream().map(Entry::getEntryId).collect(Collectors.toList());
        this.noteIdList=story.getNotes().stream().map(Note::getNoteId).collect(Collectors.toList());
    }

}
