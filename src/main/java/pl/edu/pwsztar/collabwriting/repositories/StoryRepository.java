package pl.edu.pwsztar.collabwriting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwsztar.collabwriting.entities.Story;

import java.util.Optional;

@Repository
public interface StoryRepository extends JpaRepository<Story,Long> {

    Optional<Story> getStoryByTitle(String title);

}
