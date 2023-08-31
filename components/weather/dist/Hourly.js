"use strict";
exports.__esModule = true;
var stitches_config_1 = require("../../styles/stitches.config");
var moment_1 = require("moment/moment");
var WeatherCodes_1 = require("./WeatherCodes");
var Main = stitches_config_1.styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    position: 'relative'
});
var GRADIENT_WIDTH = 0; //25;
var MainScroll = stitches_config_1.styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    overflow: 'scroll',
    paddingInline: GRADIENT_WIDTH + 'px',
    paddingBottom: '5px',
    left: -GRADIENT_WIDTH + 'px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#0005 #0002',
    '&::-webkit-scrollbar': {
        width: '0',
        height: '5px'
    },
    '&::-webkit-scrollbar-track': {
        background: '#0000',
        padding: '2px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#0000',
        borderRadius: '4px'
    },
    '&:hover, &:focus': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#0005 #0002',
        '&::-webkit-scrollbar': {
            width: '0',
            height: '5px'
        },
        '&::-webkit-scrollbar-track': {
            background: '#0000',
            padding: '2px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '$color4',
            borderRadius: '4px'
        }
    }
});
var HourCard = stitches_config_1.styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$color4',
    padding: '0.7rem 1.2rem',
    borderRadius: '0.5rem',
    gap: '0.7rem'
});
var Gradient = stitches_config_1.styled('div', {
    width: GRADIENT_WIDTH + 'px',
    height: '100%',
    position: 'absolute',
    variants: {
        side: {
            left: {
                left: 0,
                background: 'linear-gradient(90deg, $color1 0%, rgba(255,0,0,0) 100%)'
            },
            right: {
                right: 0,
                background: 'linear-gradient(270deg, $color1 0%, rgba(255,0,0,0) 100%)'
            }
        }
    },
    defaultVariants: {
        side: 'left'
    }
});
var Hour = stitches_config_1.styled('span', {
    all: 'unset',
    fontSize: '0.8rem',
    fontWeight: '900',
    color: '$color7',
    margin: '0',
    padding: '0',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    lineHeight: '1.2em'
});
var Temp = stitches_config_1.styled('span', {
    all: 'unset',
    fontSize: '2rem',
    fontWeight: '600',
    color: '$color12',
    margin: '0',
    padding: '0',
    textAlign: 'center',
    lineHeight: '1.2em'
});
// ... repeat Temp for more data points
function Hourly(_a) {
    // const scrollRef = useRef();
    // useEffect(() => {
    //
    //    document.addEventListener('wheel', function(e) {
    //       // e.preventDefault();
    //       let container = scrollRef.current;
    //       let containerScrollPosition = container.scrollLeft;
    //       container.scrollTo({
    //          top: 0,
    //          left: containerScrollPosition + e.deltaY,
    //          behavior: 'auto' //if you want smooth scrolling
    //
    //       });
    //    }, {capture: true, passive: false });
    //
    // }, []);
    var data = _a.data;
    var getTimezoneHour = function () {
        return (data === null || data === void 0 ? void 0 : data.hourly.time.indexOf(data === null || data === void 0 ? void 0 : data.current_weather.time)) || 0;
    };
    return (React.createElement(Main, null,
        React.createElement(MainScroll
        // ref={scrollRef}
        , { 
            // ref={scrollRef}
            id: "hourly-scroll" }, data === null || data === void 0 ? void 0 : data.hourly.time.slice(getTimezoneHour(), getTimezoneHour() + 24).map(function (hour, index) {
            return (React.createElement(HourCard, { key: index },
                React.createElement(Hour, null, moment_1["default"](hour).format('H[:]mm')),
                React.createElement(WeatherCodes_1.WeatherIcon, { code: data === null || data === void 0 ? void 0 : data.hourly.weathercode[getTimezoneHour() + index] }),
                React.createElement(Temp, null, data === null || data === void 0 ? void 0 :
                    data.hourly.temperature_2m[getTimezoneHour() + index].toFixed(0),
                    "\u00BA")));
        }))));
}
exports["default"] = Hourly;
