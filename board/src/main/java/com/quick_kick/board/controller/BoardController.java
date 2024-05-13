package com.quick_kick.board.controller;

import com.quick_kick.board.service.BoardService;
import com.quick_kick.board.dto.BoardDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class BoardController {

    private BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping("/")
    public String list(Model model) {

        List<BoardDto> boardDtoList = boarDtoList = boardService.getBoardlist();
        model.addAttribute("boardList",boardDtoList)
        return "board/list.html";
    }

    @GetMapping("/post")
    public String write(){
        return "board/write.html";
    }

    @PostMapping("/post")
    public String write(BoardDto boardDto){
        boardService.savePost(boardDto);
        return "redirect:/";

    }

    @GetMapping("/post/{no}")
    public String detail(@PathVariable("no") Long id, Model model){
        BoardDto boardDto = boardService.getPost(id);

        model.addAttruibute("boardDto",boardDto);
        return "board/detail.html";


    }

}
