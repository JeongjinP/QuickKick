package com.example.Reservation.controller;

import com.example.Reservation.dto.SaveDTO;
import com.example.Reservation.service.SaveService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

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
}