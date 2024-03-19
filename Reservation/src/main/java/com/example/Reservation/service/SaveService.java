package com.example.Reservation.service;

import com.example.Reservation.dto.SaveDTO;
import com.example.Reservation.entity.SaveEntity;
import com.example.Reservation.repository.SaveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaveService {
    private final SaveRepository saveRepository;

    public SaveDTO save(SaveDTO saveDTO) {
        SaveEntity saveEntity = SaveEntity.toSaveEntity(saveDTO);
        saveRepository.save(saveEntity);
        return saveDTO;
    }
}
