package pl.edu.pwsztar.collabwriting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwsztar.collabwriting.entities.Entry;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.dto.EntryDto;
import pl.edu.pwsztar.collabwriting.repositories.EntryRepository;
import pl.edu.pwsztar.collabwriting.repositories.StoryRepository;
import pl.edu.pwsztar.collabwriting.repositories.UserRepository;

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
        entry.setAuthor(userRepository.findById(dto.getAuthorId()).get());
        entry.setStory(storyRepository.findById(dto.getStoryId()).get());
        return entry;
    }
}
