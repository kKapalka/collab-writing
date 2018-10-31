package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.dto.StoryDto;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

//    public StoryDto save(StoryDto dto){
//
//    }

}
