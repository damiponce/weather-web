import { useRef, useEffect } from 'react';
import { styled } from '../../styles/stitches.config';
import { OpenMeteoForecastResponse } from '../../pages/api/WeatherServices';
import moment from 'moment/moment';
import WeatherIcon from './Icon';

const Main = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '1.3rem',
   position: 'relative'
});

const GRADIENT_WIDTH = 0; //25;

const MainScroll = styled('div', {
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

const HourCard = styled('div', {
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

const Gradient = styled('div', {
   width: GRADIENT_WIDTH + 'px',
   height: '100%',

   position: 'absolute',

   variants: {
      side: {
         left: {
            left: 0,
            background:
               'linear-gradient(90deg, $color1 0%, rgba(255,0,0,0) 100%)'
         },
         right: {
            right: 0,
            background:
               'linear-gradient(270deg, $color1 0%, rgba(255,0,0,0) 100%)'
         }
      }
   },

   defaultVariants: {
      side: 'left'
   }
});

const Hour = styled('span', {
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



const Temp = styled('span', {
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




export default function Hourly({ data }: { data?: OpenMeteoForecastResponse.RootObject }) {
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
   return (
      <Main>
         <MainScroll
            // ref={scrollRef}
            id='hourly-scroll'
            // onWheel={(e) => {
            //    e.preventDefault();
            //    e.stopPropagation();
            //    var container = document.getElementById('hourly-scroll')!;
            //    var containerScrollPosition = container.scrollLeft;
            //    container.scrollTo({
            //       top: 0,
            //       left: containerScrollPosition + e.deltaY,
            //       behavior: 'auto', //if you want smooth scrolling
            //
            //    });
            // }}
         >
            {/*<Gradient side='left' />*/}
            {data?.hourly.time.slice(0, 24).map((hour, index) => {
               return (
                  <HourCard
                     key={index}
                     // onWheel={(e) => {
                     //    e.preventDefault();
                     //    e.stopPropagation();
                     //    var container =
                     //       document.getElementById('hourly-scroll')!;
                     //    var containerScrollPosition = container.scrollLeft;
                     //    container.scrollTo({
                     //       top: 0,
                     //       left: containerScrollPosition + e.deltaY,
                     //       behavior: 'auto' //if you want smooth scrolling
                     //    });
                     // }}
                  >
                     <Hour>{moment(hour).format('H[:]mm')}</Hour>
                     <WeatherIcon code={data?.hourly.weathercode[index]} />
                     <Temp>{data?.hourly.temperature_2m[index].toFixed(0)}º</Temp>
                  </HourCard>
               );
            })}
            {/*<Gradient side='right' />*/}
         </MainScroll>
      </Main>
   );
}
