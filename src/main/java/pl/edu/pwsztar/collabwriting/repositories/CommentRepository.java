package pl.edu.pwsztar.collabwriting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwsztar.collabwriting.entities.Comment;
import pl.edu.pwsztar.collabwriting.entities.Story;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {
    List<Comment> getAllByStory(Story story);
}
