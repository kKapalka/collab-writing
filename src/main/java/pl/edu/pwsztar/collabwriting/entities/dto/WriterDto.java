package pl.edu.pwsztar.collabwriting.entities.dto;

import lombok.Builder;
import lombok.Data;
import pl.edu.pwsztar.collabwriting.entities.Writer;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class WriterDto {

    private Long writerId;
    private String userName;
    private String storyTitle;

    private List<String> writerRoleList;

    public static WriterDto fromEntity(Writer writer){
        return WriterDto.builder()
                .writerId(writer.getId())
                .userName(writer.getUser().getLogin())
                .storyTitle(writer.getStory().getTitle())
                .writerRoleList(writer.getWriterRoles().stream().map(Enum::name).collect(Collectors.toList())).build();
    }
}
