package com.example.Reservation.dto;

import com.example.Reservation.entity.SaveEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class SaveDTO {
    private Integer resnum;
    private String resdate; //
    private String restime; //
    private Double usetime; //
    private Boolean groundtype; //
    private String useground;   //
    private Integer responsibility; //

    public static SaveDTO toSaveDTO(SaveEntity saveEntity) {
        SaveDTO saveDTO = new SaveDTO();

        saveDTO.setResnum(saveEntity.getResnum());
        saveDTO.setResdate(saveEntity.getResdate());
        saveDTO.setRestime(saveEntity.getRestime());
        saveDTO.setUsetime(saveEntity.getUsetime());
        saveDTO.setGroundtype(saveEntity.getGroundtype());
        saveDTO.setUseground(saveEntity.getUseground());
        saveDTO.setResponsibility(saveEntity.getResponsibility());


        return saveDTO;
    }

}
