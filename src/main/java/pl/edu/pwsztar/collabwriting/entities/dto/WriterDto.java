package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Writer;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class WriterDto {

    private Long writerId;
    private String userName;
    private String storyTitle;

    private List<String> writerRoleList;

    public WriterDto(Writer writer){
        this.writerId=writer.getId();
        this.userName=writer.getUser().getLogin();
        this.storyTitle=writer.getStory().getTitle();
        this.writerRoleList=writer.getWriterRoles().stream().map(Enum::name).collect(Collectors.toList());
    }
}
