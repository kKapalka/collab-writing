package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.Writer;
import pl.edu.pwsztar.collabwriting.entities.dto.StoryDto;
import pl.edu.pwsztar.collabwriting.entities.dto.WriterDto;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private WriterService writerService;

    public StoryDto save(StoryDto dto){
        Story story = updateStory(dto);
        return new StoryDto(storyRepository.save(story));
    }
    public Story updateStory(StoryDto dto){
        Story story = new Story();
        if(dto.getStoryId()!=null){
            story = storyRepository.findById(dto.getStoryId()).get();
        }
        story.setTitle(dto.getTitle());
        return story;
    }

    public List<StoryDto> getAllStories(){
        return storyRepository.findAll().stream().map(StoryDto::new).collect(Collectors.toList());
    }
    @Transactional
    public StoryDto create(StoryDto dto, String user){
        Story story = new Story();
        story.setTitle(dto.getTitle());
        story = storyRepository.save(story);
        storyRepository.flush();
        WriterDto writerDto = WriterDto.builder()
                .storyTitle(dto.getTitle())
                .userName(user)
                .writerRoleList(Arrays.asList("MODERATOR")).build();
        Writer writer = writerService.saveAndGetEntity(writerDto);
        story.setWriters(Arrays.asList(writer));
        return new StoryDto(story);
    }
}
