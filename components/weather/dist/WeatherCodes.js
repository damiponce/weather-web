"use strict";
exports.__esModule = true;
exports.WeatherStatus = exports.WeatherIcon = void 0;
var stitches_config_1 = require("../../styles/stitches.config");
var Icon = stitches_config_1.styled('img', {
    width: '3rem',
    aspectRatio: 1,
    borderRadius: '0.5rem',
    // backgroundColor: '$color6',
    fontFamily: 'weathericons',
    color: '$color12',
    transform: 'scale(1.5)'
});
// CODE	        DESCRIPTION
// 0	           Clear sky
// 1, 2, 3	     Mainly clear, partly cloudy, and overcast
// 45, 48	     Fog and depositing rime fog
// 51, 53, 55	  Drizzle: Light, moderate, and dense intensity
// 56, 57	     Freezing Drizzle: Light and dense intensity
// 61, 63, 65	  Rain: Slight, moderate and heavy intensity
// 66, 67	     Freezing Rain: Light and heavy intensity
// 71, 73, 75	  Snow fall: Slight, moderate, and heavy intensity
// 77	           Snow grains
// 80, 81, 82	  Rain showers: Slight, moderate, and violent
// 85, 86	     Snow showers slight and heavy
// 95 *	        Thunderstorm: Slight or moderate
// 96, 99 *	     Thunderstorm with slight and heavy hail
function WeatherIcon(_a) {
    var code = _a.code, _b = _a.day, day = _b === void 0 ? true : _b;
    var icon_path = "";
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
    icon_path += '_fill_large';
    return React.createElement(Icon, { src: "weather-icons/" + icon_path + ".svg" });
}
exports.WeatherIcon = WeatherIcon;
function WeatherStatus(code) {
    var status = "";
    switch (code) {
        case 0:
            status = 'Clear sky';
            break;
        case 1:
            status = 'Mainly clear';
            break;
        case 2:
            status = 'Partly cloudy';
            break;
        case 3:
            status = 'Overcast';
            break;
        case 45:
            status = 'Fog';
            break;
        case 48:
            status = 'Rime fog';
            break;
        case 51:
            status = 'Light drizzle';
            break;
        case 53:
            status = 'Moderate drizzle';
            break;
        case 55:
            status = 'Dense drizzle';
            break;
        case 56:
            status = 'Light freezing drizzle';
            break;
        case 57:
            status = 'Dense freezing drizzle';
            break;
        case 61:
            status = 'Slight rain';
            break;
        case 63:
            status = 'Moderate rain';
            break;
        case 65:
            status = 'Heavy rain';
            break;
        case 66:
            status = 'Light freezing rain';
            break;
        case 67:
            status = 'Heavy freezing rain';
            break;
        case 71:
            status = 'Slight snow fall';
            break;
        case 73:
            status = 'Moderate snow fall';
            break;
        case 75:
            status = 'Heavy snow fall';
            break;
        case 77:
            status = 'Snow grains';
            break;
        case 80:
            status = 'Slight rain showers';
            break;
        case 81:
            status = 'Moderate rain showers';
            break;
        case 82:
            status = 'Violent rain showers';
            break;
        case 85:
            status = 'Slight snow showers';
            break;
        case 86:
            status = 'Heavy snow showers';
            break;
        case 95:
            status = 'Moderate thunderstorm';
            break;
        case 96:
            status = 'Thunderstorm with slight hail';
            break;
        case 99:
            status = 'Thunderstorm with heavy hail';
            break;
    }
    return status;
}
exports.WeatherStatus = WeatherStatus;
