import React from 'react';
import { Separator } from '../../comps/Separator';
import { styled } from '../../styles/stitches.config';
import { OpenMeteoForecastResponse } from '../../pages/api/WeatherServices';
import Marquee from 'react-fast-marquee';
import { useTextWidth } from '@tag0/use-text-width';

export default function Current({ data }: { data?: OpenMeteoForecastResponse.RootObject }) {
   const ref = React.useRef<HTMLDivElement>(null);
   const mainRef = React.useRef<HTMLDivElement>(null);
   const width = useTextWidth({ ref });

   return (
      <Main ref={mainRef}>
         <Location scroll={true}> {/* width > mainRef.current?.offsetWidth*/}
            <p ref={ref}>
               {data?.place || '-'}
            </p>
         </Location>
         <TempCluster>
            <Temperature>{data?.current_weather.temperature.toFixed(1) || '-'}°</Temperature>
            {/*<Separator*/}
            {/*   decorative*/}
            {/*   orientation="vertical"*/}
            {/*   css={{ margin: '0 15px' }}*/}
            {/*/>*/}
            {/*<TempRange>*/}
            {/*   <EdgeTemp>{data?.temperature.toFixed(1) || '-'}°</EdgeTemp>*/}
            {/*   <EdgeTemp>ST</EdgeTemp>*/}
            {/*</TempRange>*/}
         </TempCluster>
         <MiscCluster>
            <MiscSubCluster>
               <MiscText>wind speed</MiscText>
               <MiscData>{data?.current_weather.windspeed || '-'} km/h</MiscData>
            </MiscSubCluster>
            <MiscSubCluster>
               <MiscText>wind direction</MiscText>
               <MiscData>{data?.current_weather.winddirection || '-'}º</MiscData>
            </MiscSubCluster>
            {/*<MiscSubCluster>*/}
            {/*   <MiscText>uv index</MiscText>*/}
            {/*   <MiscData>{data?.current_weather.weathercode || '-'}</MiscData>*/}
            {/*</MiscSubCluster>*/}
         </MiscCluster>
      </Main>
   );
}

const Main = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '1.3rem'
});

const CustomMarquee = ({ className, children, scroll }: { className?: any, children: any, scroll: boolean }) => <Marquee className={className} play={scroll} gradient={false} gradientWidth={20} >{children}</Marquee>;

const Location = styled(CustomMarquee, {
   all: 'unset',
   fontSize: '1rem',
   fontWeight: '500',
   color: '$color11',
   margin: '0',
   padding: '0',
   textAlign: 'left',
   // textTransform: 'uppercase',
   letterSpacing: '0.02em',

   lineHeight: '1.2em'
});

const TempCluster = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center'
   // gap: '0.7rem', // <-- replaced by separator
});

const Temperature = styled('span', {
   all: 'unset',
   fontSize: '5rem',
   fontWeight: 600,
   color: '$color12',
   margin: '0',
   padding: '0',
   textAlign: 'right',
   lineHeight: '1.2em'
});

const TempRange = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '0.7rem'
});

const EdgeTemp = styled('span', {
   all: 'unset',
   fontSize: '1.5rem',
   fontWeight: 500,
   color: '$color12',
   opacity: 0.5,
   margin: '0',
   padding: '0',
   textAlign: 'left',
   lineHeight: '1em'
});

const MiscCluster = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around'
});

const MiscSubCluster = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '0.3rem'
});

const MiscText = styled('span', {
   all: 'unset',
   fontSize: '0.7rem',
   fontWeight: 300,
   color: '$color12',
   letterSpacing: '0.1em',
   opacity: 0.5,
   margin: '0',
   padding: '0',
   textAlign: 'center',
   textTransform: 'uppercase',
   lineHeight: '1.5em'
});

const MiscData = styled('span', {
   all: 'unset',
   fontSize: '1rem',
   fontWeight: 475,
   color: '$color12',
   letterSpacing: '0.05em',
   margin: '0',
   padding: '0',
   textAlign: 'center',
   lineHeight: '1.5em'
});