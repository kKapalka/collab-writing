package pl.edu.pwsztar.collabwriting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwsztar.collabwriting.entities.Issue;
import pl.edu.pwsztar.collabwriting.entities.Story;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue,Long> {
    List<Issue> getAllByStory(Story story);
}
