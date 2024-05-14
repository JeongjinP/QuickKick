package com.quick_kick.board.controller;

import ch.qos.logback.core.model.Model;
import com.quick_kick.board.service.BoardService;
import com.quick_kick.board.dto.BoardDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
public class BoardController {

    private BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/boardlist")
    @ResponseBody
    public List<BoardDto> show(@ModelAttribute BoardDto boardDto) {
        List<BoardDto> showResult = boardService.getBoardlist(boardDto);
        return showResult;
    }

    @PostMapping("/post")
    public String write(BoardDto boardDto){
        boardService.savePost(boardDto);
        return "redirect:/boardlist";
    }

    @GetMapping("/post/{id}")
    @ResponseBody
    public BoardDto detail(@PathVariable Long id){
        BoardDto boardDto = boardService.getPost(id);
        return boardDto;
    }

}
