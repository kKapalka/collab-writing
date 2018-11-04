package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Writer;
import pl.edu.pwsztar.collabwriting.entities.WriterRole;
import pl.edu.pwsztar.collabwriting.entities.dto.WriterDto;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.repositories.WriterRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WriterService {

    @Autowired
    private WriterRepository writerRepository;

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private UserRepository userRepository;

    public WriterDto save(WriterDto dto){
        Writer writer = updateStory(dto);
        return new WriterDto(writerRepository.save(writer));
    }
    public Writer updateStory(WriterDto dto){
        Writer writer = new Writer();
        if(dto.getStoryId()!=null){
            writer = writerRepository.findById(dto.getStoryId()).get();
        }
        writer.setWriterRoles(dto.getWriterRoleList().stream().map(WriterRole::valueOf).collect(Collectors.toList()));
        writer.setStory(storyRepository.findById(dto.getStoryId()).get());
        writer.setUser(userRepository.findById(dto.getUserId()).get());
        return writer;
    }

    public List<WriterDto> getAllStories(){
        return writerRepository.findAll().stream().map(WriterDto::new).collect(Collectors.toList());
    }

}
