import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';

import { getTemp } from './api/api';

import { useTheme } from 'next-themes';
import { styled } from '../styles/stitches.config';
import { blackA } from '@radix-ui/colors';
import * as Label from '@radix-ui/react-label';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import Header from '../components/Header';
import Current from '../components/weather/Current';
import Hourly from '../components/weather/Hourly';
import Daily from '../components/weather/Daily';

//////////////////////////

import {
   useQuery,
   useQueryClient,
} from 'react-query';
import { openMeteoFetchForecast } from './api/WeatherServices';


const Home: NextPage = () => {
   const [cookies, setCookie, removeCookie] = useCookies([
      'settings',
      'lastLocation'
   ]);
   // const [data, setData] = useState([]); //

   // THEME
   const { theme, setTheme } = useTheme();
   useEffect(() => {
      if (Object.keys(cookies).length === 0) {
         setCookie(
            'settings',
            { theme: 'system', units: 'metric' },
            { path: '/', sameSite: 'strict' }
         );
         setTheme('system');
      } else {
         // console.log(cookies);
         setTheme(cookies.settings.theme);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // QUERY
   const [cacheIsEnabled, setCacheIsEnabled] = useState(false);
   const [apiCall, setApiCall] = useState('');
   const API = useRef({ lat: 0, lon: 0, timezone: 'America/Buenos_Aires', place: '' });
   const queryClient = useQueryClient();
   const { data: weatherCache, status, error, isFetching } = useQuery(
      ['weather_cache'],
      async () => {
         let tempFetch = await openMeteoFetchForecast(API.current);

         return {...tempFetch, place: API.current.place};
      },
      {
         enabled: cacheIsEnabled,
         staleTime: 0,
         onSuccess: (data) => {
            console.log('~~~~~~~~~~~');
            console.log(data);
            // console.log(status);
            console.log('~~~~~~~~~~~');
         }
      }
   )
   ;



   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
         API.current = {lat: position.coords.latitude, lon: position.coords.longitude, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, place: 'Current location'};
         setCacheIsEnabled(true);
         queryClient.refetchQueries(['weather_cache'], {
            active: true
         });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   return (
      <Container>
         <Head>
            <title>Weather by dam</title>
            <meta
               name='description'
               content='Weather website with sources from various APIs'
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Section
            flex='row'
            css={{ height: '6rem', marginBottom: '24px', maxWidth: '1100px', position: 'relative', overflow: 'visible' }}
         >
            <Header
               apiCall={(e: {lat: number, lon: number, timezone: string, place: string}) => {
                  // setApiCall(e);
                  API.current = e;
                  setCacheIsEnabled(true);
                  queryClient.refetchQueries(['weather_cache'], {
                     active: true
                  });
               }}
               status={status}
               isFetching={isFetching}
            />
         </Section>
         <Main>
            {/* <p
               style={{
                  fontFamily: 'weathericons',
                  fontSize: '10px',
                  lineHeight: '4em',
               }}
            >
               {':>BFJNRVZ^bfjnrvz|'}
            </p> */}
            <Section
               flex='row'
               css={{ gap: '2rem', '@bp4': { gap: '60px', flexDirection: 'column' } }}
            >
               <Widget css={{ flex: 2 }}>
                  <Current data={status === 'success' ? weatherCache : undefined} />
               </Widget>
               <Widget css={{ flex: 3 }}>
                  <Hourly data={status === 'success' ? weatherCache : undefined} />
               </Widget>
            </Section>

            <Section flex='column'>
               <Widget>
                  <Daily data={status === 'success' ? weatherCache : undefined} />
               </Widget>
            </Section>
            {/* 
                <h1 className={styles.title}>
                    {cookies.temp}
                </h1>
                <button
                    className={styles.card}
                    onClick={() => {
                        getTemp('Morón').then((data) =>
                            setCookie('temp', data, {
                                path: '/',
                                sameSite: true,
                            }),
                        );
                    }}
                ></button>
                <button
                    className={styles.card}
                    onClick={() => setTheme('dynamic')}
                ></button> */}
         </Main>

         <Footer>
            <a>Powered by dam</a>
         </Footer>
      </Container>
   );
};

export default Home;



const Container = styled('div', {
   minHeight: '100vh',
   padding: '0 2rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center'
});

const Footer = styled('footer', {
   display: 'flex',
   height: 'max-content',
   padding: '2rem 0',
   borderTop: '1px solid #eaeaea',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '24px'
});

const Main = styled('main', {
   minHeight: '100%',
   padding: '0rem 0',
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   flexWrap: 'nowrap',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '1rem'
});

const Section = styled('div', {
   width: '100%',
   display: 'flex',
   flexWrap: 'nowrap',
   justifyContent: 'space-between', // <-- which one?
   alignItems: 'center',
   overflow: 'hidden',
   variants: {
      flex: {
         row: {
            flexDirection: 'row'
         },
         column: {
            flexDirection: 'column'
         }
      }
   }
});

const Widget = styled('div', {
   flex: 1,
   width: '100%',
   height: '100%',
   overflow: 'hidden'
});