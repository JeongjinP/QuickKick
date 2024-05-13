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

    // 예약 저장
    public SaveDTO save(SaveDTO saveDTO) {
        SaveEntity saveEntity = SaveEntity.toSaveEntity(saveDTO);
        saveRepository.save(saveEntity);
        return saveDTO;
    }

    // 날짜별 예약 저장 내역 조회
    public List<SaveDTO> findAllByResdate(String resdate) {
        List<SaveEntity> saveEntities = saveRepository.findAllByResdate(resdate);
        return saveEntities.stream().map(SaveDTO::toSaveDTO).collect(Collectors.toList());
    }

    // 학번별 예약 저장 내역 조회 (예약 책임자 기준)
    public List<SaveDTO> findAllByResponsibility(Integer responsibility) {
        List<SaveEntity> saveEntities = saveRepository.findAllByResponsibility(responsibility);
        return saveEntities.stream().map(SaveDTO::toSaveDTO).collect(Collectors.toList());
    }

    // 날짜, 시간으로 예약 삭제
    public void deleteByTime(String resdate, String restime) {
        saveRepository.deleteByResdateAndRestime(resdate, restime);
    }

}
