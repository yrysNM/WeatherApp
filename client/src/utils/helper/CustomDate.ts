const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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
}

export function cusomDate(): string {
  const date: string[] = new Date().toUTCString().split(" ");

  const customDate = `${CustomDate.getDayName()}, ${date[2]} ${date[1]}, ${
    date[3]
  }`;

  return customDate;
}
