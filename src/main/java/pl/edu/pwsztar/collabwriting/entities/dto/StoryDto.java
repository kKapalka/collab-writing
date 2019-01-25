package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.*;
import pl.edu.pwsztar.collabwriting.entities.base.StoryContentEntity;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class StoryDto {

    public Long storyId;
    public String title; //wymagane
    public List<Long> authorIdList;
    public List<Long> commentIdList;
    public List<Long> issueIdList;
    public List<Long> entryIdList;
    public List<Long> noteIdList;
    public String moderatorName;

    public StoryDto(Story story){
        this.storyId=story.getId();
        this.title=story.getTitle();
        this.authorIdList=story.getWriters()!=null ?
                story.getWriters().stream().filter(writer -> writer.getWriterRoles()!=null).map(Writer::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.issueIdList=story.getIssues()!=null?
                story.getIssues().stream().filter(Issue::getApproved).map(Issue::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.commentIdList=story.getComments()!=null?
                story.getComments().stream().filter(Comment::getApproved).map(Comment::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.entryIdList=story.getEntries()!=null?
                story.getEntries().stream().filter(Entry::getApproved).map(Entry::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.noteIdList=story.getNotes()!=null?
                story.getNotes().stream().filter(Note::getApproved).map(Note::getId).collect(Collectors.toList())
                : new ArrayList<>();
        this.moderatorName=story.getWriters().stream()
                .filter(writer->writer.getWriterRoles().contains(WriterRole.MODERATOR)).collect(Collectors.toList()).get(0).getUser().getLogin();
    }

}
