package com.weather.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weather.config.LogoutService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/logout")
@RequiredArgsConstructor
public class LogoutController {
  private final LogoutService logoutService;

  @PostMapping()
  public void logout(HttpServletRequest request, HttpServletResponse respose, Authentication authentication) {
    logoutService.logout(request, respose, authentication);
    ;
  }

}