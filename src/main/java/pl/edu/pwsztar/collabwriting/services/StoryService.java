package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.dto.StoryDto;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

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

}
