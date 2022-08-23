import { styled } from '../../styles/stitches.config';

const Icon = styled('img', {
   width: '3rem',
   aspectRatio: 1,
   borderRadius: '0.5rem',
   // backgroundColor: '$color6',
   fontFamily: 'weathericons',
   color: '$color12',
   transform: 'scale(1.5)'
});

// Code	Description
// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy
// 95 *	Thunderstorm: Slight or moderate
// 96, 99 *	Thunderstorm with slight and heavy hail

export default function WeatherIcon({ code, day = true }: { code: number, day?: boolean}) {
   let icon_path = ``
   switch (code) {
      case 0:
         icon_path = day ? 'sun' : 'moon';
         break;
      case 1:
         icon_path = day ? 'cloud_sun' : 'cloud_moon';
         break;
      case 2:
         icon_path = day ? 'cloud_sun' : 'cloud_moon';
         break;
      case 3:
         icon_path = day ? 'cloud' : 'cloud';
         break;
      case 45:
         icon_path = day ? 'cloud_fog' : 'cloud_fog';
         break;
      case 48:
         icon_path = day ? 'cloud_fog' : 'cloud_fog';
         break;
      case 51:
         icon_path = day ? 'cloud_sun_rain' : 'cloud_moon_rain';
         break;
      case 53:
         icon_path = day ? 'cloud_sun_rain' : 'cloud_moon_rain';
         break;
      case 55:
         icon_path = day ? 'cloud_sun_rain' : 'cloud_moon_rain';
         break;
      case 56:
         icon_path = day ? 'cloud_hail' : 'cloud_hail';
         break;
      case 57:
         icon_path = day ? 'cloud_hail' : 'cloud_hail';
         break;
      case 61:
         icon_path = day ? 'cloud_drizzle' : 'cloud_drizzle';
         break;
      case 63:
         icon_path = day ? 'cloud_rain' : 'cloud_rain';
         break;
      case 65:
         icon_path = day ? 'cloud_heavyrain' : 'cloud_heavyrain';
         break;
      case 66:
         icon_path = day ? 'cloud_hail' : 'cloud_hail';
         break;
      case 67:
         icon_path = day ? 'cloud_hail' : 'cloud_hail';
         break;
      case 71:
         icon_path = day ? 'cloud_sleet' : 'cloud_sleet';
         break;
      case 73:
         icon_path = day ? 'cloud_snow' : 'cloud_snow';
         break;
      case 75:
         icon_path = day ? 'cloud_snow' : 'cloud_snow';
         break;
      case 77:
         icon_path = day ? 'cloud_sleet' : 'cloud_sleet';
         break;
      case 80:
         icon_path = day ? 'cloud_drizzle' : 'cloud_drizzle';
         break;
      case 81:
         icon_path = day ? 'cloud_rain' : 'cloud_rain';
         break;
      case 82:
         icon_path = day ? 'cloud_heavyrain' : 'cloud_heavyrain';
         break;
      case 85:
         icon_path = day ? 'cloud_sleet' : 'cloud_sleet';
         break;
      case 86:
         icon_path = day ? 'cloud_snow' : 'cloud_snow';
         break;
      case 95:
         icon_path = day ? 'cloud_bolt' : 'cloud_bolt';
         break;
      case 96:
         icon_path = day ? 'cloud_bolt' : 'cloud_bolt';
         break;
      case 99:
         icon_path = day ? 'cloud_bolt' : 'cloud_bolt';
         break;
   }
   icon_path += '_fill_large'
   return <Icon src={`weather-icons/${icon_path}.svg`}/>

}