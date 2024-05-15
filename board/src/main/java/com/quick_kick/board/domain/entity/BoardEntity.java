package com.quick_kick.board.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import com.quick_kick.board.domain.entity.TimeEntity;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class BoardEntity extends TimeEntity {

    @Id @GeneratedValue
    private Long id;

    @Column(length=10,nullable = false)
    private String writer;

    @Column(length=100,nullable = false)
    private String title;

    @Column(columnDefinition ="TEXT",nullable = false)
    private String content;

    @Column
    private String category;

    @Builder
    public BoardEntity(Long id, String title, String content, String writer, String category){
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.category = category;
    }


}
