import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '../../comps/Accordion';
import TemperatureDelta from '../../comps/TemperatureDelta';
import { styled } from '../../styles/stitches.config';
import { OpenMeteoForecastResponse } from '../../pages/api/WeatherServices';
import WeatherIcon from './Icon';
const moment = require('moment');


export default function Daily({ data }: { data?: OpenMeteoForecastResponse.RootObject }) {
   return (
      <Main>
         <Accordion type="multiple">
            {data?.daily.time.map((day, index) => {
               return (
                  <AccordionItem value={day} key={index}>
                     <DayCard>
                        <Day>{moment(day).format('ddd D')}</Day>
                        <WeatherIcon code={data?.daily.weathercode[index]} />
                        <TemperatureDelta
                           flex={1}
                           min={Math.min(...data?.daily.temperature_2m_min)}
                           max={Math.max(...data?.daily.temperature_2m_max)}
                           lower={parseFloat(data?.daily.temperature_2m_min[index].toFixed(0))}
                           upper={parseFloat(data?.daily.temperature_2m_max[index].toFixed(0))}
                        />
                        {/*<Rain>{data.daily.sunrise}</Rain>*/}
                        {/*<Wind>{data.daily.sunrise}</Wind>*/}
                     </DayCard>
                     {/*@ts-ignore*/}
                     <AccordionContent>
                        Yes. It adheres to the WAI-ARAI design pattern.
                     </AccordionContent>
                  </AccordionItem>
               );
            })}
         </Accordion>
      </Main>
   );
}


const Main = styled('div', {
   marginBlockStart: '50px',
});

const DayCard = styled(AccordionTrigger, {
   // display: 'flex',
   marginBottom: '1rem',
});

const Day = styled('span', {
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
   lineHeight: '1.2em',
});

const Icon = styled('span', {
   // flex: 1,
   width: '70px',
   height: '100%',
   borderRadius: '0.5rem',
   backgroundColor: '$color6',
});

const Rain = styled('span', {
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
      display: 'none',
   },
});

const Wind = styled('span', {
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
      display: 'none',
   },
});