package com.example.member.service;

import com.example.member.dto.MemberDTO;
import com.example.member.entity.MemberEntity;
import com.example.member.repository.MemberRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service //스프링이 관리해주는 객체 == 스프링 빈
@Getter
@Setter
@RequiredArgsConstructor   //controller와 같이. final 멤버변수 생성자 만드는 역할
public class MemberService {

    private final MemberRepository memberRepository; // 먼저 jpa, mysql dependency 추가

    public void save(MemberDTO memberDTO) {
        // repsitory의 save 메서드 호출
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);
        //Repository의 save메서드 호출 (조건. entity객체를 넘겨줘야 함)
    }

    public MemberDTO login(MemberDTO memberDTO) {
        Optional<MemberEntity> byId = memberRepository.findById(memberDTO.getId());
        if(byId.isPresent()) {
            MemberEntity memberEntity = byId.get();

            if(memberEntity.getPassword().equals(memberDTO.getPassword())) {
                MemberDTO dto = MemberDTO.toMemberDTO(memberEntity);
                return dto;
            }
            else {
                System.out.println("password unavailable");
                return null;
            }
        }
        else {
            System.out.println("No Result");
            return null;
        }
    }

    public MemberDTO findById(Integer id) {
        Optional<MemberEntity> optionalMemberEntity = memberRepository.findById(id);
        if (optionalMemberEntity.isPresent()) {
            return MemberDTO.toMemberDTO(optionalMemberEntity.get());
        } else {
            System.out.println("Wrong information");
            return null;
        }
    }
}
