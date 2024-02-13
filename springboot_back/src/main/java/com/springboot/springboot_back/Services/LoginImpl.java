package com.springboot.springboot_back.Services;


import com.springboot.springboot_back.domain.Member;
import com.springboot.springboot_back.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LoginImpl implements Login {
    private final MemberMapper memberMapper;

    @Override
    public List<Member> findByID(int ID) {
        return memberMapper.findByID(ID);
    }
}