package com.springboot.springboot_back.Services;

import com.springboot.springboot_back.Repository.MemberRepository;
import com.springboot.springboot_back.domain.Member;
import com.springboot.springboot_back.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public abstract class Login {
    private final MemberMapper memberMapper;

    @Autowired
    private MemberRepository memberRepository;
    public List<Member> findByID() {
        return memberRepository.findByID();
    }

    @Autowired
    public Login(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    public List<Member> findAll() {
        return memberMapper.findAll();
    }
}
