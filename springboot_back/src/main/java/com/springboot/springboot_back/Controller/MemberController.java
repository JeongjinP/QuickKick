package com.springboot.springboot_back.Controller;

import com.springboot.springboot_back.domain.Member;
import com.springboot.springboot_back.Services.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class MemberController {
    private final Login login;

    @Autowired
    public MemberController(Login login) {
        this.login = login;
    }

    @GetMapping("/Member")
    public List<Member> findAll() {
        return login.findAll();
    }
}
