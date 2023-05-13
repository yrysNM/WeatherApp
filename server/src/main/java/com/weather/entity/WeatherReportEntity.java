package com.weather.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import java.time.LocalDateTime;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

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

    @NotNull(message = "city name shoudn't be null")
    @NotBlank(message = "city is mandatory")
    private String city;

    @Min(0)
    @Max(335)
    private Integer temperature;

    @NotNull(message = "description must not be empty")
    @NotBlank(message = "description is mandatory")
    private String weatherDescription;

    @CreationTimestamp
    private LocalDateTime createdAt;

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
