package com.weather.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;


@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "weather_reports")
public class WeatherReportEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private long reportId;
    private String city;
    private Integer temperature;
    private String title;
    private String icon;
    private String weatherDescription;
    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime lastUpdateAt;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;

        WeatherReportEntity that = (WeatherReportEntity) o;

        if (reportId != that.reportId)
            return false;
        if (temperature != that.temperature)
            return false;
        if (city != null ? !city.equals(that.city) : that.city != null)
            return false;
        if (weatherDescription != null ? !weatherDescription.equals(that.weatherDescription)
                : that.weatherDescription != null)
            return false;
        if (createdAt != null ? !createdAt.equals(that.createdAt) : that.createdAt != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (reportId ^ (reportId >>> 32));
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + temperature;
        result = 31 * result + (weatherDescription != null ? weatherDescription.hashCode() : 0);
        result = 31 * result + (createdAt != null ? createdAt.hashCode() : 0);
        return result;
    }

}
