package com.quick_kick.board.service;

import com.quick_kick.board.domain.entity.BoardEntity;
import com.quick_kick.board.domain.repository.BoardRepository;
import com.quick_kick.board.dto.BoardDto;

import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@RequiredArgsConstructor
@Getter
@Setter
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }
    @Transactional
    public BoardDto savePost(BoardDto boardDto) {
        boardRepository.save(boardDto.toEntity()).getId();
        return boardDto;
    }

    @Transactional
    public List<BoardDto> getBoardlist(BoardDto boardDto) {
        List<BoardEntity> boards = boardRepository.findAll();
        List<BoardDto> boardDtoList = new ArrayList<>();

        for(BoardEntity board : boards){
            BoardDto boardDtos = BoardDto.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .writer(board.getWriter())
                    .createDate(board.getCreateDate())
                    .category(board.getCategory())
                    .build();

            boardDtoList.add(boardDtos);
        }

        return boardDtoList;
    }

    public List<BoardDto> getBoardByCategory(String Category) {
        List<BoardEntity> boards = boardRepository.findByCategory(Category);
        List<BoardDto> boardDtoList = new ArrayList<>();

        for(BoardEntity board : boards){
            BoardDto boardDtos = BoardDto.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .writer(board.getWriter())
                    .createDate(board.getCreateDate())
                    .category(board.getCategory())
                    .build();

            boardDtoList.add(boardDtos);
        }

        return boardDtoList;
    }

    @Transactional
    public BoardDto getPost(Long id){
        Optional<BoardEntity> optionalBoardEntity = boardRepository.findById(id);
        if (optionalBoardEntity.isEmpty()) {
            throw new NoSuchElementException("게시물을 찾을 수 없습니다.");
        }
        BoardEntity board = optionalBoardEntity.get();

        BoardDto boardDto = BoardDto.builder()
                .id(board.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .writer(board.getWriter())
                .createDate(board.getCreateDate())
                .category(board.getCategory())
                .build();
        return boardDto;
    }
}
