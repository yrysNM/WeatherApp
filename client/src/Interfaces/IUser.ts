export interface IUserLogin {
  access_token: string;
  refresh_token: string;
}

export interface IUserData {
  createdAt: Date;
  lastUpdateAt: Date;
  userEmail: string;
  userId: number;
  userLogin: string;
  weatherReportsByUser: IWeatherReportsByUser[];
}

export interface IWeatherReportsByUser {
  city: string;
  createdAt: Date;
  icon: string;
  lastUpdateAt: Date;
  meRankedDown: boolean;
  meRankedUp: boolean;
  rank: number;
  reportId: number;
  temperature: number;
  title: string;
  userName: string;
  weatherDescription: string;
}
