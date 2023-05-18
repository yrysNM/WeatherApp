package com.weather.mapper;

import com.weather.dto.WeatherReportDto;
import com.weather.entity.UserEntity;
import com.weather.entity.WeatherReportEntity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


public class WeatherReportMapper {
    public static WeatherReportDto mapToWeatherReportDto(WeatherReportEntity reportEntity) {

        return WeatherReportDto.builder()
                .reportId(reportEntity.getReportId())
                .city(reportEntity.getCity())
                .temperature(reportEntity.getTemperature())
                .title(reportEntity.getTitle())
                .icon(reportEntity.getIcon())
                .weatherDescription(reportEntity.getWeatherDescription())
                .createdAt(reportEntity.getCreatedAt())
                .lastUpdateAt(reportEntity.getLastUpdateAt())
                .userName(reportEntity.getUser().getUserLogin())
                .build();
    }

    // To set day-night mode icon code
    public static WeatherReportDto mapToWeatherReportDtoGet(WeatherReportEntity reportEntity, UserEntity user, Integer hour) {
        String iconMode = reportEntity.getIcon() + "";
        boolean meRankedUp = false;
        boolean meRankedDown = false;

        if (
                (hour >= 18 && hour <= 23) || (hour >= 0 && hour <= 6)
        )
            iconMode += "n";
        else
            iconMode += "d";

        if(reportEntity.getLikes().contains(user)){
            meRankedUp = true;
        }
        else if (reportEntity.getDislikes().contains(user)) {
            meRankedDown = true;
        }

        return WeatherReportDto.builder()
                .reportId(reportEntity.getReportId())
                .city(reportEntity.getCity())
                .temperature(reportEntity.getTemperature())
                .title(reportEntity.getTitle())
                .icon(iconMode)
                .weatherDescription(reportEntity.getWeatherDescription())
                .createdAt(reportEntity.getCreatedAt())
                .lastUpdateAt(reportEntity.getLastUpdateAt())
                .userName(reportEntity.getUser().getUserLogin())
                .rank(getTotalRank(reportEntity))
                .meRankedDown(meRankedDown)
                .meRankedUp(meRankedUp)
                .build();
    }

    public static WeatherReportDto mapToWeatherReportDtoAnonymous(WeatherReportEntity reportEntity, Integer hour) {
        String iconMode = reportEntity.getIcon() + "";
        boolean meRankedUp = false;
        boolean meRankedDown = false;

        if (
                (hour >= 18 && hour <= 23) || (hour >= 0 && hour <= 6)
        )
            iconMode += "n";
        else
            iconMode += "d";

        return WeatherReportDto.builder()
                .reportId(reportEntity.getReportId())
                .city(reportEntity.getCity())
                .temperature(reportEntity.getTemperature())
                .title(reportEntity.getTitle())
                .icon(iconMode)
                .weatherDescription(reportEntity.getWeatherDescription())
                .createdAt(reportEntity.getCreatedAt())
                .lastUpdateAt(reportEntity.getLastUpdateAt())
                .userName(reportEntity.getUser().getUserLogin())
                .rank(getTotalRank(reportEntity))
                .build();
    }

    private static int getTotalRank(WeatherReportEntity weatherReport){
        int likesCount = weatherReport.getLikes().size();
        int dislikesCount = weatherReport.getDislikes().size();
        
        return likesCount - dislikesCount;
    }

    public static List<WeatherReportEntity> filtered(LocalDate date, String location, List<WeatherReportEntity> reports){
        List<WeatherReportEntity> filteredReports = new ArrayList<>();

        if(date != null && location != null){
            // Filter reports by date and location
            filteredReports = reports.stream()
                    .filter(report -> report.getCreatedAt().toLocalDate().equals(date))
                    .filter(report -> report.getCity().equals(location))
                    .toList();
        } else if (date != null && location == null) {
            filteredReports = reports.stream()
                    .filter(report -> report.getCreatedAt().toLocalDate().equals(date))
                    .toList();
        } else if (date == null && location != null) {
            filteredReports = reports.stream()
                    .filter(report -> report.getCity().equals(location))
                    .toList();
        }

        return filteredReports;
    }
    
    
}
