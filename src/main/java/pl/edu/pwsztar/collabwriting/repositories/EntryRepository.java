package pl.edu.pwsztar.collabwriting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwsztar.collabwriting.entities.Entry;
import pl.edu.pwsztar.collabwriting.entities.Story;

import java.util.List;

@Repository
public interface EntryRepository extends JpaRepository<Entry,Long> {
    List<Entry> getAllByStory(Story story);
}
