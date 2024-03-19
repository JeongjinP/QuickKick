package com.example.Reservation.service;

import com.example.Reservation.dto.SaveDTO;
import com.example.Reservation.entity.SaveEntity;
import com.example.Reservation.repository.SaveRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Getter
@Setter
public class SaveService {
    private final SaveRepository saveRepository;

    public SaveDTO save(SaveDTO saveDTO) {
        SaveEntity saveEntity = SaveEntity.toSaveEntity(saveDTO);
        saveRepository.save(saveEntity);
        return saveDTO;
    }

    public List<SaveDTO> findAllByResdate(String resdate) {
        List<SaveEntity> saveEntities = saveRepository.findAllByResdate(resdate);
        return saveEntities.stream().map(SaveDTO::toSaveDTO).collect(Collectors.toList());
    }

}
