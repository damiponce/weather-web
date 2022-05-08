import { useQuery } from 'react-query';

const OWM_API_KEY = 'REDACTED';

export function fetchSMN() {}

export function fetchOWM(search: string, settings?: any): any {
   return useQuery(['weather_cache'], async () => {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/onecall?lat=-39&lon=-69&appid=${OWM_API_KEY}`
      );
      return await response.json();
   });
}
