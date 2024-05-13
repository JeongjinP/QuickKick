package com.quick_kick.board.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class Board extends TimeEntity {

    @Id @GeneratedValue
    private long id;

    @Column(length=10,nullable = false)
    private String writer;

    @Column(length=100,nullable = false)
    private String title;

    @Column(columnDefinition ="TEXT",nullable = false)
    private String content;

    @Builder
    public Board(long id, String title, String content, String writer){
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
    }


}
