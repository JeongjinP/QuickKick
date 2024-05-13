package com.example.Reservation.controller;

import com.example.Reservation.dto.SaveDTO;
import com.example.Reservation.service.SaveService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class SaveController {
    private final SaveService saveService;

    @GetMapping("/Reservation")
    public String saveForm() {
        return "save";
    }

    @PostMapping("/Reservation/save")
    @ResponseBody
    public SaveDTO save(@ModelAttribute SaveDTO saveDTO) {
        SaveDTO saveResult = saveService.save(saveDTO);
        return saveResult;
    }

    @GetMapping("/search")
    public String searchForm() {
        return "search";
    }

    @PostMapping("/Reservation/search")
    @ResponseBody
    public ResponseEntity<List<SaveDTO>> findByResdate(@RequestParam String resdate) {
        List<SaveDTO> searchResult = saveService.findAllByResdate(resdate);
        return ResponseEntity.ok().body(searchResult);
    }

    @PostMapping("/Reservation/search/res")
    @ResponseBody
    public ResponseEntity<List<SaveDTO>> findByResponsibility(@RequestParam Integer stdnum) {
        List<SaveDTO> searchResult = saveService.findAllByResponsibility(stdnum);
        return ResponseEntity.ok().body(searchResult);
    }

    @DeleteMapping("/Reservation/delete")
    public ResponseEntity<String> deleteByTime(@RequestParam String resdate, @RequestParam String restime) {
        saveService.deleteByTime(resdate, restime);
        return ResponseEntity.ok().body("Reservation deleted : " + resdate + " " + restime);
    }
}