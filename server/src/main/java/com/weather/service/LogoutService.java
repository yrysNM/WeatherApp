package com.weather.service;

import org.springframework.security.core.Authentication;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface LogoutService {
  public void logout(HttpServletRequest request,
      HttpServletResponse response,
      Authentication authentication);
}
