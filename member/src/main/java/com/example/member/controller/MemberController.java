package com.example.member.controller;

import com.example.member.dto.MemberDTO;
import jakarta.servlet.http.HttpSession;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.member.service.MemberService;

@Controller
@Getter
@Setter
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/member/save")
    public String saveForm() {
        return "save";
    }

    @PostMapping("/member/save")
    public String save(@ModelAttribute MemberDTO memberDTO) {
        System.out.println("MemberController.save");
        System.out.println("memberDTO = " + memberDTO);
        memberService.save(memberDTO);

        return "index";
    }

    @GetMapping("/member/login")
    public String loginForm(){
        return "login";
    }

    @PostMapping("/member/login") // session : 로그인 유지
    public String login(@ModelAttribute MemberDTO memberDTO, HttpSession session) {
        MemberDTO loginResult = memberService.login(memberDTO);
        if (loginResult != null) {
            // login 성공
            session.setAttribute("login", loginResult.getId());
            return "main";
        } else {
            // login 실패
            return "login";
        }
    }

    @GetMapping("/member")
    public String findById(@RequestParam Integer id, Model model, MemberDTO memberDTO) {
        MemberDTO loginResult = memberService.findById(id);

        if (loginResult != null) {
            Integer pa = memberDTO.getId();
            System.out.printf("%d", pa);

            System.out.println("findById login succeed");

            model.addAttribute("login", loginResult);
            return "forward:/main";
        }
        else {
            System.out.println("findById error");
            return "index";
        }
    }

    @GetMapping("/main")
    public String showMain(@ModelAttribute MemberDTO memberDTO, HttpSession session){
        MemberDTO loginResult = memberService.login(memberDTO);

        if (loginResult != null) {
            System.out.println("showmain login succeed");
            session.setAttribute("id", loginResult.getId());
            return "main";
        } else {
            System.out.println("show main error");
            return "index";
        }
    }
}
