"use strict";
exports.__esModule = true;
var Accordion_1 = require("../../comps/Accordion");
var TemperatureDelta_1 = require("../../comps/TemperatureDelta");
var stitches_config_1 = require("../../styles/stitches.config");
var WeatherCodes_1 = require("./WeatherCodes");
var moment = require('moment');
function Daily(_a) {
    var data = _a.data;
    return (React.createElement(Main, null,
        React.createElement(Accordion_1.Accordion, { type: "multiple" }, data === null || data === void 0 ? void 0 : data.daily.time.map(function (day, index) {
            return (React.createElement(Accordion_1.AccordionItem, { style: {
                    marginBottom: '1rem'
                }, value: day, key: index },
                React.createElement(DayCard, null,
                    React.createElement(Day, null, moment(day).format('ddd D')),
                    React.createElement(WeatherStatusBlock, null,
                        React.createElement(WeatherCodes_1.WeatherIcon, { code: data === null || data === void 0 ? void 0 : data.daily.weathercode[index] }),
                        React.createElement(WeatherStatusText, null, WeatherCodes_1.WeatherStatus(data === null || data === void 0 ? void 0 : data.daily.weathercode[index]))),
                    React.createElement(TemperatureDelta_1["default"], { flex: 1, min: Math.min.apply(Math, data === null || data === void 0 ? void 0 : data.daily.temperature_2m_min), max: Math.max.apply(Math, data === null || data === void 0 ? void 0 : data.daily.temperature_2m_max), lower: parseFloat(data === null || data === void 0 ? void 0 : data.daily.temperature_2m_min[index].toFixed(0)), upper: parseFloat(data === null || data === void 0 ? void 0 : data.daily.temperature_2m_max[index].toFixed(0)) })),
                React.createElement(Accordion_1.AccordionContent, null, "Yes. It adheres to the WAI-ARAI design pattern.")));
        }))));
}
exports["default"] = Daily;
var Main = stitches_config_1.styled('div', {
    marginBlockStart: '50px'
});
var DayCard = stitches_config_1.styled(Accordion_1.AccordionTrigger, {
// display: 'flex',
});
var Day = stitches_config_1.styled('span', {
    all: 'unset',
    // flex: 0.5,
    fontSize: '0.8rem',
    fontWeight: '900',
    color: '$color7',
    margin: '0',
    padding: '0',
    textAlign: 'left',
    textTransform: 'uppercase',
    width: '6.5rem',
    letterSpacing: '0.1em',
    lineHeight: '1.2em'
});
var WeatherStatusText = stitches_config_1.styled('span', {
    all: 'unset',
    // flex: 0.5,
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '$color9',
    margin: '0',
    padding: '0',
    textAlign: 'left',
    textTransform: 'uppercase',
    maxWidth: '100px',
    letterSpacing: '0.1em',
    lineHeight: '1.2em',
    '@bp2': {
        display: 'none'
    }
});
var WeatherStatusBlock = stitches_config_1.styled('div', {
    all: 'unset',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '10px',
    marginInlineEnd: 'auto'
});
var Icon = stitches_config_1.styled('span', {
    // flex: 1,
    width: '70px',
    height: '100%',
    borderRadius: '0.5rem',
    backgroundColor: '$color6'
});
var Rain = stitches_config_1.styled('span', {
    all: 'unset',
    // flex: 0.5,
    flexBasis: '4em',
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '$color12',
    margin: '0',
    padding: '0',
    textAlign: 'left',
    // letterSpacing: '0.1em',
    lineHeight: '1.2em',
    '@bp2': {
        display: 'none'
    }
});
var Wind = stitches_config_1.styled('span', {
    all: 'unset',
    // flex: 1,
    flexBasis: '6em',
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '$color12',
    margin: '0',
    padding: '0',
    textAlign: 'left',
    justifySelf: 'flex-end',
    // letterSpacing: '0.1em',
    lineHeight: '1.2em',
    '@bp3': {
        display: 'none'
    }
});
