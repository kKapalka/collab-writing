package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.Writer;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;
import pl.edu.pwsztar.collabwriting.entities.dto.WriterDto;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;
import pl.edu.pwsztar.collabwriting.repositories.WriterRepository;

import javax.persistence.EntityNotFoundException;
import java.util.Arrays;
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
    public List<WriterDto> getByStoryId(Long id){
        return writerRepository.getAllByStory(storyRepository.findById(id).orElseThrow(EntityNotFoundException::new))
                .stream().map(WriterDto::new).collect(Collectors.toList());
    }
    public boolean checkIfUserIsModeratorForStory(String username, Story story){
        return writerRepository.getAllByStoryAndWriterRolesIsContaining
                (story,"MODERATOR").stream().map(writer->writer.getUser().getLogin())
                .collect(Collectors.toList()).contains(username);
    }
    public void attemptApplyRole(User user, Story story, WriterRole role){
        Writer writer;
        List<Writer> writers = writerRepository.getAllByStoryAndUser(story,user);
        if(writers.size()!=0){
            writer = writers.get(0);
            List<WriterRole> writerRoles = writer.getWriterRoles();
            if(!writerRoles.contains(role)){
                writerRoles.add(role);
                writer.setWriterRoles(writerRoles);
            }
        } else{
            writer = new Writer();
            writer.setUser(user);
            writer.setStory(story);
            writer.setWriterRoles(Arrays.asList(role));
        }
        writerRepository.save(writer);
    }
}
