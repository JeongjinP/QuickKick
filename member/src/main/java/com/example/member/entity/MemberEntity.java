package com.example.member.entity;

import com.example.member.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name="Login")
public class MemberEntity { //table 역할
    //jpa ==> database를 객체처럼 사용 가능
    @Id
    @Column(unique = true)
    private Integer id;

    @Column
    private String password;

    @Column
    private String stdname;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();

        memberEntity.setId(memberDTO.getId());
        memberEntity.setPassword(memberDTO.getPassword());
        memberEntity.setStdname(memberDTO.getStdname());
        return memberEntity;
    }

}
