package com.weather.advice;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.weather.exception.UserAlreadyExistsException;
import com.weather.exception.NotFoundException;

@RestControllerAdvice
public class ApplicationExceptionHandler {

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler({ MethodArgumentNotValidException.class })
  public Map<String, String> handleInvalidArgument(MethodArgumentNotValidException exception) {
    Map<String, String> errorObj = new HashMap<>();

    exception.getBindingResult().getFieldErrors().forEach(error -> {
      errorObj.put(error.getField(), error.getDefaultMessage());
    });

    return errorObj;
  }

  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ExceptionHandler({ NotFoundException.class })
  public Map<String, String> handleNotFound(NotFoundException ex) {
    Map<String, String> errorObj = new HashMap<>();

    errorObj.put("errorMessage", ex.getMessage());

    return errorObj;
  }

  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ExceptionHandler({ UserAlreadyExistsException.class })
  public Map<String, String> handleUserAlreadyExist(UserAlreadyExistsException ex) {
    Map<String, String> errorObj = new HashMap<>();

    errorObj.put("errorMessage", ex.getMessage());

    return errorObj;
  }
}
