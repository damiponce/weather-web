import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { globalCss, darkTheme, dynamicTheme } from '../styles/stitches.config';

const globalStyles = globalCss({
   '*': { margin: 0, padding: 0, fontFeatureSettings: `"ss01", "cv01"` },
   body: { backgroundColor: '$color1', color: '$color12' },
});

import { CookiesProvider } from 'react-cookie';

import {
   QueryClient,
   QueryClientProvider,
} from 'react-query';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         refetchOnMount: false,
         refetchOnReconnect: false,
         // staleTime: 1000 * 60,
         cacheTime: 1000 * 60 * 60 * 1, // 1 hour(s)
      },
   },
});

const localStoragePersistor = createWebStoragePersistor({
   storage: global.window && window.localStorage,
});

persistQueryClient({
   queryClient,
   persistor: localStoragePersistor,
});

// DEBUG
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
   globalStyles();
   return (
      <QueryClientProvider client={queryClient}>
         {/*<ReactQueryDevtools initialIsOpen={false} />*/}
         <CookiesProvider>
            <ThemeProvider
               disableTransitionOnChange
               attribute="class"
               value={{
                  light: 'light-theme',
                  dark: darkTheme.className,
                  dynamic: dynamicTheme.className,
               }}
               enableSystem={false}
               defaultTheme="dark"
            >
               <style global jsx>{`
                  html,
                  body,
                  body > div:first-child,
                  div#__next {
                     /* height: 100%; */
                  }
               `}</style>
               {/*@ts-ignore*/}
               <Component {...pageProps} />
            </ThemeProvider>
         </CookiesProvider>{' '}
      </QueryClientProvider>
   );
}

export default MyApp;
