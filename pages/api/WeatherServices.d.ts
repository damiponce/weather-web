// export interface Wind {
//    windSpeed: number;
//    windDeg: number;
//    windGust: number;
// }

export interface Current {
   sunrise: number;
   sunset: number;

   temp: number;
   feelsLike: number;
   tempMin: number;
   tempMax: number;

   pressure: number;
   humidity: number;
   // sea and ground level pressures

   dewPoint: number;
   uv: number;

   clouds: number;
   visibility: number;
   windSpeed: number;
   windDeg: number;
   windGust: number;
}

export interface Hourly {
   dt: number;

   temp: number;
   feelsLike: number;

   pressure: number;
   humidity: number;

   dewPoint: number;
   uv: number;

   clouds: number;
   visibility: number;
   windSpeed: number;
   windDeg: number;
   windGust: number;
}

export interface Daily {
   dt: number;
   sunrise: number;
   sunset: number;
   moonrise: number;
   moonset: number;
   moonPhase: number;

   temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
   };

   feelsLike: {
      day: number;
      night: number;
      eve: number;
      morn: number;
   };

   pressure: number;
   humidity: number;
   // sea and ground level pressures

   dewPoint: number;
   uv: number;

   clouds: number;
   visibility: number;
   windSpeed: number;
   windDeg: number;
   windGust: number;
}

export interface WeatherFormat {
   fetchTime: number;
   lastUpdated: number;

   lat: number;
   lon: number;
   location: string;
   timezone: string;

   current: Current;

   hourly: Hourly[];

   daily: Daily[];
}
