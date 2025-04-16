package com.cafe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class CafeController {

    @GetMapping("/hello")
    public String hello() {
        return "¡Hola desde Spring Boot!";
    }
}