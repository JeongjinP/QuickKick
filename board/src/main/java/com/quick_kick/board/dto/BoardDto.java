package com.quick_kick.board.dto;

import com.quick_kick.board.domain.entity.BoardEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class BoardDto {
    private Long id;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime createDate;
    private LocalDateTime modifiedDate;
    private String category;


    public BoardEntity toEntity(){
        BoardEntity build = BoardEntity.builder()
                .id(id)
                .writer(writer)
                .title(title)
                .content(content)
                .category(category)
                .build();
        return build;
    }

    @Builder
    public BoardDto(long id, String title, String content, String writer, LocalDateTime createDate, LocalDateTime modifiedDate, String category){
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.createDate = createDate;
        this.modifiedDate = modifiedDate;
        this.category = category;
    }
}
