package com.weather.controller;

import com.weather.dto.UserDto;
import com.weather.entity.UserEntity;
import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;
import com.weather.service.UserService;

import jakarta.validation.Valid;

// import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<UserDto> registration(@RequestBody @Valid UserEntity userEntity)
            throws UserAlreadyExistsException {

        return new ResponseEntity<>(userService.registration(userEntity), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<UserDto> getUser(@RequestParam String userEmail) throws NotFoundException {
        return ResponseEntity.ok(userService.getUser(userEmail));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Integer> deleteUser(@PathVariable Integer userId) {

        return ResponseEntity.ok(userService.deleteUser(userId));
    }
}
