package com.springboot.springboot_back.Repository;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.springboot.springboot_back.domain.Member;
import java.util.List;

@Mapper
public interface MemberRepository {
    @Select("SELECT * FROM ID WHERE ID = #{ID}")
    public List<Member> findByID();
}
