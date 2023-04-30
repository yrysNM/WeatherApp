package com.weather.controller;

import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity registration(@RequestBody UserEntity userEntity) {
        try {
            userService.registration(userEntity);
            return ResponseEntity.ok("User successfully has been saved!");
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("There is some error!");
        }
    }

    @GetMapping("/")
    public ResponseEntity getUser() {
        try {
            return ResponseEntity.ok("Server is working!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("There is some error!");
        }
    }
}
