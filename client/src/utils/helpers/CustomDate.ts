// Define the necessary astronomical constants
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;
const EARTH_RADIUS = 6371; // in km
const EARTH_ATMOSPHERE_REFRACTION = 34 / 60; // in degrees

export class CustomDate {
  private static days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  private static months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  static d: Date = new Date();

  constructor() {}

  static getDayName = (): string => {
    const dayName: string = this.days[this.d.getDay()];
    return dayName;
  };

  static getMonthName = (): string => {
    const monthName: string = this.months[this.d.getMonth()];
    return monthName;
  };

  // Calculate the solar declination angle for a given day of the year
  // Вычислить угол склонения солнца для данного дня года
  private calculateSolarDeclination(dayOfYear: number): number {
    return (
      -23.45 * Math.cos((2 * Math.PI * (dayOfYear - 81)) / 365) * DEG_TO_RAD
    );
  }

  // Calculate the hour angle for a given location and time of day
  private calculateHourAngle(
    longitude: number,
    solarDeclination: number,
    latitude: number,
    zenith: number,
    isSunrise: boolean
  ): number {
    const sinPhi = Math.sin(latitude * DEG_TO_RAD);
    const cosPhi = Math.cos(latitude * DEG_TO_RAD);
    const sinDelta = Math.sin(solarDeclination);
    const cosDelta = Math.cos(solarDeclination);
    const cosH =
      (Math.cos(zenith * DEG_TO_RAD) - sinDelta * sinPhi) / (cosDelta * cosPhi);
    let hourAngle = Math.acos(cosH);

    if (isSunrise) {
      hourAngle = -hourAngle;
    }

    return hourAngle;
  }

  // Calculate the sunrise and sunset times for a given date and location
  /**
   *
   * @param {Date} date - The date for which to calculate the sunrise and sunset times.
   * @param {number} latitude - The latitude of the location in decimal degrees.
   * @param {number} longitude - The longitude of the location in decimal degrees.
   * @returns  {{ sunrise: Date, sunset: Date }} - An object containing the calculated sunrise and sunset times as Date objects.
   */
  public getSunriseAndSunset(
    date: Date,
    latitude: number,
    longitude: number
  ): { sunrise: Date; sunset: Date } {
    // Calculate the day of the year
    const dayOfYear = Math.floor(
      (date.getTime() - Date.UTC(date.getUTCFullYear(), 0, 0, 0, 0, 0, 0)) /
        86400000
    );

    // Calculate the solar declination angle
    const solarDeclination = this.calculateSolarDeclination(dayOfYear);

    // Calculate the zenith angle (i.e. the angle between the observer's
    // horizon and the astronomical horizon)
    const zenith = 90 + EARTH_ATMOSPHERE_REFRACTION;

    // Calculate the hour angles for sunrise and sunset
    const sunriseHourAngle = this.calculateHourAngle(
      longitude,
      solarDeclination,
      latitude,
      zenith,
      true
    );
    const sunsetHourAngle = this.calculateHourAngle(
      longitude,
      solarDeclination,
      latitude,
      zenith,
      false
    );

    // Calculate the time of sunrise and sunset
    const utcMidnight = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    );
    const sunriseTime = new Date(
      utcMidnight.getTime() + RAD_TO_DEG * sunriseHourAngle * 4 * 60 * 1000
    );
    const sunsetTime = new Date(
      utcMidnight.getTime() + RAD_TO_DEG * sunsetHourAngle * 4 * 60 * 1000
    );

    return {
      sunrise: sunriseTime,
      sunset: sunsetTime,
    };
  }

  /**
   * @param {new Date().toTimeString()} timeString
   * @returns converted hour and minutes for 24 hour
   *
   */
  public static convertTo24Hour = (timeString: string): string => {
    // Separate hours, minutes, and AM/PM indicator fromt he time string
    const [time, modifier] = timeString.split(" ");
    const [hours, minutes] = time.split(":");

    //Convert hours to 24-hour format
    let convertedHours = Number(hours);
    if (convertedHours !== 12 && modifier === "PM") {
      convertedHours += 12;
    } else if (modifier === "AM" && convertedHours === 12) {
      convertedHours = 0;
    }

    // Pad hours and monites with leading zeros if needed
    const paddedHours = convertedHours.toString().padStart(2, "0");
    const paddedMinutes = minutes.padStart(2, "0");

    // return the time in 24-hour format
    return `${paddedHours}:${paddedMinutes} ${modifier === "PM" ? "PM" : "AM"}`;
  };
}

export function cusomDate(): string {
  const date: string[] = new Date().toUTCString().split(" ");

  const customDate = `${CustomDate.getDayName()}, ${date[2]} ${date[1]}, ${
    date[3]
  }`;

  return customDate;
}
