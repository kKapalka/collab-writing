package pl.edu.pwsztar.collabwriting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwsztar.collabwriting.entities.Story;
import pl.edu.pwsztar.collabwriting.entities.User;
import pl.edu.pwsztar.collabwriting.entities.Writer;
import pl.edu.pwsztar.collabwriting.entities.enums.WriterRole;

import java.util.List;

@Repository
public interface WriterRepository extends JpaRepository<Writer,Long> {

    List<Writer> getAllByStory(Story story);

    List<Writer> getAllByStoryAndWriterRolesIsContaining(Story story, WriterRole role);

    List<Writer> getAllByStoryAndUser(Story story, User user);
}
