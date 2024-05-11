package com.quick_kick.board.dto;

import com.quick_kick.board.domain.entity.Board;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class BoardDto {
    private long id;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime createDate;
    private LocalDateTime modifiedDate;

    public Board toEntity(){
        Board build = Board.builder()
                .id(id)
                .writer(writer)
                .title(title)
                .content(content)
                .build();
        return build;
    }

    @Builder
    public BoardDto(long id, String title, String content, String writer, LocalDateTime createDate, LocalDateTime modifiedDate){
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
    }
}
