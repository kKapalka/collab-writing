package pl.edu.pwsztar.collabwriting.entities.dto;

import pl.edu.pwsztar.collabwriting.entities.Writer;

import java.util.List;
import java.util.stream.Collectors;

public class WriterDto {

    private Long writerId;

    private Long userId;
    private String userName;

    private Long storyId;
    private String storyTitle;

    private List<String> writerRoleList;

    public WriterDto(Writer writer){
        this.writerId=writer.getWriterId();
        this.userId=writer.getUser().getUserId();
        this.userName=writer.getUser().getLogin();
        this.storyId=writer.getStory().getStoryId();
        this.storyTitle=writer.getStory().getTitle();
        this.writerRoleList=writer.getWriterRoles().stream().map(Enum::name).collect(Collectors.toList());
    }
}
