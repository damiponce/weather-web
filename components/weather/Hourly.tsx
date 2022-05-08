import { styled } from '../../styles/stitches.config';

const Main = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '1.3rem',
   position: 'relative',
});

const GRADIENT_WIDTH = 25;

const MainScroll = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   overflow: 'scroll',

   paddingInline: GRADIENT_WIDTH + 'px',

   left: -GRADIENT_WIDTH + 'px',

   scrollbarWidth: 'thin',
   scrollbarColor: '#0005 #0002',

   '&::-webkit-scrollbar': {
      width: '0',
      height: '5px',
   },

   '&::-webkit-scrollbar-track': {
      background: '#0000',
      padding: '2px',
   },

   '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#0000',
      borderRadius: '4px',
   },

   '&:hover, &:focus': {
      scrollbarWidth: 'thin',
      scrollbarColor: '#0005 #0002',

      '&::-webkit-scrollbar': {
         width: '0',
         height: '5px',
      },

      '&::-webkit-scrollbar-track': {
         background: '#0000',
         padding: '2px',
      },

      '&::-webkit-scrollbar-thumb': {
         backgroundColor: '$color4',
         borderRadius: '4px',
      },
   },
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
   gap: '0.7rem',
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
               'linear-gradient(90deg, $color1 0%, rgba(255,0,0,0) 100%)',
         },
         right: {
            right: 0,
            background:
               'linear-gradient(270deg, $color1 0%, rgba(255,0,0,0) 100%)',
         },
      },
   },

   defaultVariants: {
      side: 'left',
   },
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
   lineHeight: '1.2em',
});

const Icon = styled('img', {
   width: '3rem',
   aspectRatio: 1,
   borderRadius: '0.5rem',
   // backgroundColor: '$color6',
   fontFamily: 'weathericons',
   color: '$color12',
   transform: 'scale(1.5)',
});

const Temp = styled('span', {
   all: 'unset',
   fontSize: '2rem',
   fontWeight: '600',
   color: '$color12',
   margin: '0',
   padding: '0',
   textAlign: 'center',
   lineHeight: '1.2em',
});

// ... repeat Temp for more data points

const hours = [
   ['now', '18°'],
   ['10pm', '16°'],
   ['11pm', '15°'],
   ['12am', '15°'],
   ['1am', '13°'],
   ['2am', '12°'],
   ['2am', '12°'],
   ['2am', '12°'],
];

export default function Hourly() {
   return (
      <Main>
         hola
         <MainScroll
            id="hourly-scroll"
            onWheel={(e) => {
               e.preventDefault();
               e.stopPropagation();
               var container = document.getElementById('hourly-scroll')!;
               var containerScrollPosition = container.scrollLeft;
               container.scrollTo({
                  top: 0,
                  left: containerScrollPosition + e.deltaY,
                  behavior: 'auto', //if you want smooth scrolling
               });
            }}
         >
            <Gradient side="left" />
            {hours.map(([hour, temp], index) => {
               return (
                  <HourCard
                     key={index}
                     onWheel={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        var container =
                           document.getElementById('hourly-scroll')!;
                        var containerScrollPosition = container.scrollLeft;
                        container.scrollTo({
                           top: 0,
                           left: containerScrollPosition + e.deltaY,
                           behavior: 'auto', //if you want smooth scrolling
                        });
                     }}
                  >
                     <Hour>{hour}</Hour>
                     <Icon src="weather-icons/cloud_sun_fill_large.svg" />
                     <Temp>{temp}</Temp>
                  </HourCard>
               );
            })}
            <Gradient side="right" />
         </MainScroll>
      </Main>
   );
}
