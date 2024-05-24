package com.example.Reservation.entity;

import com.example.Reservation.dto.SaveDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Setter
@Getter
@Table(name = "reservation")
public class SaveEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="resnum")
    private Integer resnum;

    @Column
    private String resdate;

    @Column
    private String restime;

    @Column
    private Double usetime;

    @Column
    private Boolean groundtype;

    @Column
    private String useground;

    @Column
    private Integer responsibility;

    public static SaveEntity toSaveEntity(SaveDTO saveDTO) {
        SaveEntity saveEntity = new SaveEntity();

        saveEntity.setResnum(saveDTO.getResnum());
        saveEntity.setResdate(saveDTO.getResdate());
        saveEntity.setRestime(saveDTO.getRestime());
        saveEntity.setUsetime(saveDTO.getUsetime());
        saveEntity.setGroundtype(saveDTO.getGroundtype());
        saveEntity.setUseground(saveDTO.getUseground());
        saveEntity.setResponsibility(saveDTO.getResponsibility());

        return saveEntity;
    }
}
