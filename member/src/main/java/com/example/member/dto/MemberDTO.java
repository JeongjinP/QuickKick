package com.example.member.dto;

import com.example.member.entity.MemberEntity;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MemberDTO {
    private Integer id;
    private String password;
    private String stdname;

    //lombok 어노테이션으로 getter,setter,생성자,toString 메서드 생략 가능

    public Integer getId() {
        return this.id;
    }

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();

        memberDTO.setId(memberEntity.getId());
        memberDTO.setPassword(memberEntity.getPassword());
        memberDTO.setStdname(memberEntity.getStdname());

        return memberDTO;
    }
}
