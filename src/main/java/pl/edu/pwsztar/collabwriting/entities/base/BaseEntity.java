package pl.edu.pwsztar.collabwriting.entities.base;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@MappedSuperclass
public abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="ID", nullable = false)
    private Long id;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="CREATION_DATE", updatable = false, nullable = false)
    private LocalDateTime creationDate;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="MODIFICATION_DATE", nullable = false)
    private LocalDateTime modificationDate;

    @PrePersist
    protected void onCreate() {
        modificationDate = creationDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        modificationDate = LocalDateTime.now();
    }

}
