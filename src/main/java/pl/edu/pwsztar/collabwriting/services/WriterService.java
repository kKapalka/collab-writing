package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Writer;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;
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
        Writer writer = updateWriter(dto);
        return new WriterDto(writerRepository.save(writer));
    }
    public Writer updateWriter(WriterDto dto){
        Writer writer = new Writer();
        if(dto.getWriterId()!=null){
            writer = writerRepository.findById(dto.getWriterId()).get();
        }
        writer.setWriterRoles(dto.getWriterRoleList().stream().map(WriterRole::valueOf).collect(Collectors.toList()));
        writer.setStory(storyRepository.getStoryByTitle(dto.getStoryTitle()).get());
        writer.setUser(userRepository.findByLogin(dto.getUserName()).get());
        return writer;
    }

    public List<WriterDto> getAllWriters(){
        return writerRepository.findAll().stream().map(WriterDto::new).collect(Collectors.toList());
    }

}
