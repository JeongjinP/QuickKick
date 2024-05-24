package com.example.Reservation.repository;

import com.example.Reservation.entity.SaveEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SaveRepository extends JpaRepository<SaveEntity, Integer> {

    List<SaveEntity> findAllByResdate(String resdate);

    List<SaveEntity> findAllByResponsibility(Integer responsibility);

    void deleteByResdateAndRestime(String resdate, String restime);
}
