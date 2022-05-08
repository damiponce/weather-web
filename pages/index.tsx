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
   useMutation,
   useQueryClient,
   QueryObserver,
} from 'react-query';

const Container = styled('div', {
   minHeight: '100vh',
   padding: '0 2rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
});

const Footer = styled('footer', {
   display: 'flex',
   height: 'max-content',
   padding: '2rem 0',
   borderTop: '1px solid #eaeaea',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '24px',
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
   gap: '1rem',
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
            flexDirection: 'row',
         },
         column: {
            flexDirection: 'column',
         },
      },
   },
});

const Widget = styled('div', {
   flex: 1,
   width: '100%',
   height: '100%',
   overflow: 'hidden',
});

const Home: NextPage = () => {
   const [cookies, setCookie, removeCookie] = useCookies([
      'settings',
      'lastLocation',
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
   }, []);

   // QUERY
   const [cacheIsEnabled, setCacheIsEnabled] = useState(false);
   const [apiCall, setApiCall] = useState('');
   const API = useRef('');
   const queryClient = useQueryClient();
   const { data, status, error, isFetching } = useQuery(
      ['weather_cache'],
      async () => {
         const response = await fetch(API.current);
         return await response.json();
      },
      {
         enabled: !!cacheIsEnabled,
         onSuccess: (data) => {
            console.log('~~~~~~~~~~~');
            console.log(data);
            // console.log(status);
            console.log('~~~~~~~~~~~');
         },
      }
   );

   // console.log('~~~~~~~~~~~');
   // console.log(data);
   // console.log(status);
   // console.log('~~~~~~~~~~~');

   // useEffect(() => {
   //    {
   //       apiCall !== '' && null;
   //    }
   //    console.log('>>>>>>>>>>>>>>>');
   //    console.log('API call: ', apiCall);
   //    console.log(data);
   //    console.log(status);
   //    console.log('>>>>>>>>>>>>>>>');
   //    // debugger;
   // }, [apiCall]);

   return (
      <Container>
         <Head>
            <title>Weather by dam</title>
            <meta
               name="description"
               content="Weather website with sources from various APIs"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Section
            flex="row"
            css={{ height: '6rem', marginBottom: '24px', maxWidth: '1100px' }}
         >
            <Header
               apiCall={(e: string) => {
                  // setApiCall(e);
                  API.current = e;
                  setCacheIsEnabled(true);
                  queryClient.refetchQueries(['weather_cache'], {
                     active: true,
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
               flex="row"
               css={{ gap: '2rem', '@bp4': { flexDirection: 'column' } }}
            >
               <Widget css={{ flex: 2 }}>
                  <Current data={status === 'success' ? data.current : null} />
               </Widget>
               <Widget css={{ flex: 3 }}>
                  <Hourly />
               </Widget>
            </Section>

            <Section flex="column">
               <Widget>
                  <Daily />
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
