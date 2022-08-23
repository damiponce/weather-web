
export interface OpenMeteoGeocodingResponse {
   'results': {
      'id': number,
      'name': string,
      'latitude': number,
      'longitude': number,
      'elevation': number,
      'feature_code': string,
      'country_code': string,
      'admin1_id'?: number,
      'admin2_id'?: number,
      'admin3_id'?: number,
      'admin4_id'?: number,
      'timezone': string,
      'population': number,
      'postcodes': string[],
      'country_id': number,
      'country': string,
      'admin1'?: string,
      'admin2'?: string,
      'admin3'?: string,
      'admin4'?: string
   }[],
   'generationtime_ms': number
}

export async function openMeteoFetchGeocoding(search: string, count = 5) : Promise<OpenMeteoGeocodingResponse> {
   const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=${count}`
   );
   return await response.json();
}

export function openMeteoSearchParse(data: OpenMeteoGeocodingResponse) {
   return data.results.map(result => {
      let str = result.name;
      str+= result.admin4 ? `, ${result.admin4}` : '';
      str+= result.admin3 ? `, ${result.admin3}` : '';
      str+= result.admin2 ? `, ${result.admin2}` : '';
      str+= result.admin1 ? `, ${result.admin1}` : '';
      str+= result.country ? `, ${result.country}` : '';
      return str
      // return `${result.name}, ${result.admin1 ?? ""}, ${result.country}`;
   })
}

export async function openMeteoFetchForecast(data: {lat: number, lon: number, timezone: string}): Promise<OpenMeteoForecastResponse.RootObject> {
   const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,surface_pressure,precipitation,rain,weathercode,windspeed_10m,winddirection_10m&timezone=${data.timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true`)
   return await response.json();
}


export declare module OpenMeteoForecastResponse {

   export interface CurrentWeather {
      temperature: number;
      windspeed: number;
      winddirection: number;
      weathercode: number;
      time: string;
   }

   export interface HourlyUnits {
      time: string;
      temperature_2m: string;
      relativehumidity_2m: string;
      dewpoint_2m: string;
      apparent_temperature: string;
      surface_pressure: string;
      precipitation: string;
      rain: string;
      weathercode: string;
      windspeed_10m: string;
      winddirection_10m: string;
   }

   export interface Hourly {
      time: string[];
      temperature_2m: number[];
      relativehumidity_2m: number[];
      dewpoint_2m: number[];
      apparent_temperature: number[];
      surface_pressure: number[];
      precipitation: number[];
      rain: number[];
      weathercode: number[];
      windspeed_10m: number[];
      winddirection_10m: number[];
   }

   export interface DailyUnits {
      time: string;
      weathercode: string;
      temperature_2m_max: string;
      temperature_2m_min: string;
      sunrise: string;
      sunset: string;
   }

   export interface Daily {
      time: string[];
      weathercode: number[];
      temperature_2m_max: number[];
      temperature_2m_min: number[];
      sunrise: string[];
      sunset: string[];
   }

   export interface RootObject {
      latitude: number;
      longitude: number;
      generationtime_ms: number;
      utc_offset_seconds: number;
      timezone: string;
      timezone_abbreviation: string;
      elevation: number;
      current_weather: CurrentWeather;
      hourly_units: HourlyUnits;
      hourly: Hourly;
      daily_units: DailyUnits;
      daily: Daily;
      place: string
   }

}