package com.weather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.weather.entity.WeatherReportEntity;

@Repository
public interface WeatherReportRepository extends JpaRepository<WeatherReportEntity, Long> {
}
