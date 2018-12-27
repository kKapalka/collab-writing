package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Entry;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.dto.EntryDto;
import pl.edu.pwsztar.collabwriting.repositories.EntryRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EntryService {

    @Autowired
    private EntryRepository entryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StoryRepository storyRepository;

    public EntryDto save(EntryDto dto){
        Entry entry = updateEntry(dto);
        return new EntryDto(entryRepository.save(entry));
    }
    private Entry updateEntry(EntryDto dto){
        Entry entry = new Entry();
        if(dto.getEntryId()!=null){
            entry = entryRepository.findById(dto.getEntryId()).get();
        }
        entry.setEntryText(dto.getEntryText());
        entry.setAuthor(userRepository.findByLogin(dto.getAuthorName()).get());
        entry.setStory(storyRepository.getStoryByTitle(dto.getStoryTitle()).get());
        return entry;
    }

    public List<EntryDto> getAllEntries(){
        return entryRepository.findAll().stream().map(EntryDto::new).collect(Collectors.toList());
    }
    public List<EntryDto> getByStoryId(Long id){
        return entryRepository.getAllByStory(storyRepository.findById(id).orElseThrow(EntityNotFoundException::new))
                .stream().map(EntryDto::new).collect(Collectors.toList());
    }
}
