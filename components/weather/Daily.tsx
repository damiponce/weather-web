import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '../../comps/Accordion';
import TemperatureDelta from '../../comps/TemperatureDelta';
import { styled } from '../../styles/stitches.config';

const Main = styled('div', {});

const DayCard = styled(AccordionTrigger, {
   // display: 'flex',
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

interface Day {
   day: string;
   lower: number;
   upper: number;
   rain: number;
   wind: number;
}

const days: Day[] = [
   { day: 'Sun 19', lower: 18, upper: 27, rain: 100, wind: 7.4 },
   { day: 'Mon 20', lower: 16, upper: 24, rain: 0, wind: 11.3 },
   { day: 'Tue 21', lower: 15, upper: 25, rain: 0, wind: 5.7 },
   { day: 'Wed 22', lower: 15, upper: 22, rain: 0, wind: 10.4 },
   { day: 'Thu 23', lower: 13, upper: 20, rain: 35, wind: 3.5 },
];

export default function Daily() {
   return (
      <Main>
         <Accordion type="multiple">
            {days.map((day, i) => {
               return (
                  <AccordionItem value={day.day} key={i}>
                     <DayCard>
                        <Day>{day.day}</Day>
                        <Icon />
                        <TemperatureDelta
                           flex={1}
                           min={13}
                           max={27}
                           lower={day.lower}
                           upper={day.upper}
                        />
                        <Rain>{day.rain}%</Rain>
                        <Wind>{day.wind} km/h</Wind>
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
