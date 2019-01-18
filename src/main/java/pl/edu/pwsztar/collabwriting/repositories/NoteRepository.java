package pl.edu.pwsztar.collabwriting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwsztar.collabwriting.entities.Note;
import pl.edu.pwsztar.collabwriting.entities.Story;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {

    List<Note> getAllByStory(Story story);

    List<Note> getAllByStoryAndApproved(Story story, Boolean approved);


}
