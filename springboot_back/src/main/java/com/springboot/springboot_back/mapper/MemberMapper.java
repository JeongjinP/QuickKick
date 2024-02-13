package com.springboot.springboot_back.mapper;

import com.springboot.springboot_back.domain.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MemberMapper {
    @Select("SELECT * FROM login")
    List<Member> findAll();

    @Select("SELECT * FROM login WHERE id=#{ID} and password=#{password}")
    List<Member> findByID(int ID);
}