import { useContext, useEffect, useState } from "react";

import { IListWeatherDays, IWeatherDays } from "../../Interfaces";
import { useHttp } from "../../hooks/http.hook";
import { WeatherContext } from "../../context/weatherContext";
import { CardWeatherHeader } from "../HeadCardWeather";
import { CardLayout } from "../layouts/demo/CardLayout";
import { TableDayWeather } from "../TableDayWeather";
import { DayWeather, HelperLayoutDay } from "../DayWeather";

import { IGeneralWeather } from "../../@types/weatherContext";

const WeatherCard = () => {
    const [listDailyData, setListDailyData] = useState<IListWeatherDays[]>([]);
    const [threeDays, setThreeDays] = useState<IListWeatherDays[]>([]);
    const { coord, main } = useContext(WeatherContext)
        ?.weatherData as IGeneralWeather;
    const { request } = useHttp();

    useEffect(() => {
        if (coord) {
            request<IWeatherDays>({
                url: `${import.meta.env.VITE_BASE_URL}/weather/days`,
                method: "GET",
                headers: {
                    "Content-type": "application-json",
                    lat: `${coord.lat}`,
                    lon: `${coord.lon}`,
                },
            }).then((res) => {
                setListDailyData(
                    res.list.filter((weather, i, arr) => {
                        return (
                            // weather.dt_txt.substring(0, 10) !==
                            // (arr[i + 1]?.dt_txt ?? "").substring(0, 10)
                            weather.dt_txt.substring(8, 10) === `${new Date().getDate()}`
                        );
                    })
                );

                setThreeDays(
                    res.list
                        .filter((weather) => {
                            return weather.dt_txt.substring(11, 13) === "09";
                        })
                        .slice(0, 2)
                );
            });
        }
    }, [coord]);

    return (
        <CardLayout>
            <CardWeatherHeader />
            <TableDayWeather listDailyData={listDailyData} />

            <HelperLayoutDay>
                <DayWeather day="Today" temp={Math.round((main?.temp ?? 0) - 273.15)} />
                <DayWeather
                    day="Tomorrow"
                    temp={Math.round((threeDays[0]?.main?.temp ?? 0) - 273.15)}
                />
                <DayWeather
                    day="Day after tomorrow"
                    temp={Math.round((threeDays[1]?.main?.temp ?? 0) - 273.15)}
                />
            </HelperLayoutDay>
        </CardLayout>
    );
};

export { WeatherCard };
