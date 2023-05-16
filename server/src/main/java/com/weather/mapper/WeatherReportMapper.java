package com.weather.mapper;

import com.weather.dto.WeatherReportDto;
import com.weather.entity.UserEntity;
import com.weather.entity.WeatherReportEntity;


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

        if (
                (hour >= 18 && hour <= 23) || (hour >= 0 && hour <= 6)
        )
            iconMode += "n";
        else
            iconMode += "d";

        WeatherReportDto weatherReportDto =  WeatherReportDto.builder()
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

        if(reportEntity.getLikes().contains(user)){
            weatherReportDto.setMeRankedUp(true);
        }
        else if (reportEntity.getDislikes().contains(user)) {
            weatherReportDto.setMeRankedDown(true);
        }

        return weatherReportDto;
    }

    private static int getTotalRank(WeatherReportEntity weatherReport){
        int likesCount = weatherReport.getLikes().size();
        int dislikesCount = weatherReport.getDislikes().size();
        
        return likesCount - dislikesCount;
    }
    
    
}
