package com.weather.repository;

import com.weather.entity.IconEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IconRepository extends JpaRepository<IconEntity, Integer> {
    IconEntity findByTitle(String title);
}
