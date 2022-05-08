import { useEffect, useState } from 'react';
import { keyframes, styled } from '../styles/stitches.config';
import {
   SunIcon,
   MoonIcon,
   ShadowIcon,
   UpdateIcon,
   HamburgerMenuIcon,
   ChevronRightIcon,
   CheckIcon,
   DotFilledIcon,
   GearIcon,
} from '@radix-ui/react-icons';
import { ToggleGroup, ToggleGroupItem } from '../comps/ThemeSwitches';
import { useTheme } from 'next-themes';

import { useCookies } from 'react-cookie';
import { fetchOWM } from '../pages/api/WeatherServices';
import { useQuery, QueryClient, useQueryClient } from 'react-query';
import {
   DropdownMenu,
   DropdownMenuArrow,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuItemIndicator,
   DropdownMenuLabel,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
   DropdownMenuTriggerItem,
} from '../comps/Dropdown';

const SearchBox = styled('input', {
   all: 'unset',
   width: 200,
   display: 'inline-flex',
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 4,
   padding: '0 10px',
   height: 35,
   fontSize: 15,
   lineHeight: 1,
   color: '$color12',
   backgroundColor: '$color3',
   '&:focus': { backgroundColor: '$color4' },
});

const spin = keyframes({
   '0%': { transform: 'rotate(0deg)' },
   '100%': { transform: 'rotate(360deg)' },
});

const Button = styled('button', {
   all: 'unset',
   backgroundColor: '$color3',
   color: '$color11',
   height: 35,
   width: 35,
   display: 'flex',
   fontSize: 15,
   lineHeight: 1,
   alignItems: 'center',
   justifyContent: 'center',
   marginLeft: 1,
   borderRadius: 4,
   '&:hover': { backgroundColor: '$color4' },
   '&[data-state=on], &:active': {
      backgroundColor: '$color5',
      color: '$color12',
   },
   '&:focus': { position: 'relative' },
   ':first-child': {
      '&[data-state=true]': {
         transformOrigin: 'center',
         animation: `${spin} 1.5s linear infinite`,
      },
   },
});

const Box = styled('div', {});

const RightSlot = styled('div', {
   marginLeft: 'auto',
   paddingLeft: 20,
   color: '$color11',
   ':focus > &': { color: '$color2' },
   '[data-disabled] &': { color: '$color8' },
});

const IconButton = styled('button', {
   all: 'unset',
   fontFamily: 'inherit',
   borderRadius: 4,
   // borderRadius: '100%',
   height: 35,
   width: 35,
   display: 'inline-flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: '$color11',
   backgroundColor: '$color3',
   boxShadow: `0 2px 10px ${'$color7'}`,
   '&:hover': { backgroundColor: '$color4' },
});

export default function Header({
   apiCall,
   status,
   isFetching,
}: {
   apiCall: any;
   status: string;
   isFetching: boolean;
}) {
   const { theme, setTheme } = useTheme();
   const [cookies, setCookie] = useCookies(['settings']);
   const [picker, updatePicker] = useState<string>();

   const [bookmarksChecked, setBookmarksChecked] = useState(true);
   const [urlsChecked, setUrlsChecked] = useState(false);
   const [service, setService] = useState('owm');
   const [units, setUnits] = useState('metric');

   const queryClient = useQueryClient();

   const f = `https://api.openweathermap.org/data/2.5/onecall?lat=${
      (Math.random() - 0.5) * 180
   }&lon=${
      (Math.random() - 0.5) * 360
   }&units=metric&appid=599baf2462741655e2750a389362ffc6`;

   useEffect(() => {
      setCookie(
         'settings',
         { theme: theme, units: 'metric' },
         { path: '/', sameSite: 'strict' }
      );
      // updatePicker(cookies.settings.theme);
      // if (Object.keys(cookies).length === 0) {
      // } else {
      //    // console.log(cookies);
      //    // setTheme(cookies.settings.theme);
      // }
   }, [theme]);

   useEffect(() => {
      updatePicker(cookies.settings.theme);
   }, []);

   /*
   useEffect(() => {
      console.log('PICKER: ', picker);
      console.log('COOKIE: ', cookies.settings.theme);
      console.log('-------------------');
   }, [picker]);
   */

   return (
      <>
         <SearchBox
            placeholder="Search..."
            aria-placeholder="Search"
            onKeyPress={(e) => {
               //@ts-ignore
               e.key === 'Enter' && alert('Searching for: ' + e.target.value);
            }}
         />
         <Button
            onClick={() => {
               apiCall(f);
            }}
         >
            <UpdateIcon data-state={isFetching} />
         </Button>
         <span>{status}</span>
         <span>isFetching: {isFetching ? 'true' : 'false'}</span>
         <ToggleGroup
            type="single"
            aria-label="Theme switcher"
            value={
               theme === 'light' || theme === 'dark' || theme === 'dynamic'
                  ? picker
                  : ''
            }
            onValueChange={(value) =>
               value === 'light' || value === 'dark' || value === 'dynamic'
                  ? (setTheme(value), updatePicker(value))
                  : (setTheme('system'), updatePicker('system'))
            }
         >
            <ToggleGroupItem value="light" aria-label="Light mode">
               <SunIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="dark" aria-label="Dark mode">
               <MoonIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="dynamic" aria-label="Dynamic mode">
               <ShadowIcon />
            </ToggleGroupItem>
         </ToggleGroup>
         <Box>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <IconButton aria-label="Customise options">
                     <GearIcon />
                  </IconButton>
               </DropdownMenuTrigger>

               <DropdownMenuContent sideOffset={5}>
                  {/* <DropdownMenuItem>
                     New Tab <RightSlot>⌘+T</RightSlot>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     New Window <RightSlot>⌘+N</RightSlot>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                     New Private Window <RightSlot>⇧+⌘+N</RightSlot>
                  </DropdownMenuItem>
                  <DropdownMenu>
                     <DropdownMenuTriggerItem>
                        More Tools
                        <RightSlot>
                           <ChevronRightIcon />
                        </RightSlot>
                     </DropdownMenuTriggerItem>
                     <DropdownMenuContent sideOffset={2} alignOffset={-5}>
                        <DropdownMenuItem>
                           Save Page As… <RightSlot>⌘+S</RightSlot>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                        <DropdownMenuItem>Name Window…</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                     checked={bookmarksChecked}
                     onCheckedChange={setBookmarksChecked}
                  >
                     <DropdownMenuItemIndicator>
                        <CheckIcon />
                     </DropdownMenuItemIndicator>
                     Show Bookmarks <RightSlot>⌘+B</RightSlot>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                     checked={urlsChecked}
                     onCheckedChange={setUrlsChecked}
                  >
                     <DropdownMenuItemIndicator>
                        <CheckIcon />
                     </DropdownMenuItemIndicator>
                     Show Full URLs
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator /> */}
                  <DropdownMenuLabel>Units</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                     value={units}
                     onValueChange={setUnits}
                  >
                     <DropdownMenuRadioItem value="metric">
                        <DropdownMenuItemIndicator>
                           <DotFilledIcon />
                        </DropdownMenuItemIndicator>
                        Metric (°C, m/s)
                     </DropdownMenuRadioItem>
                     <DropdownMenuRadioItem value="imperial">
                        <DropdownMenuItemIndicator>
                           <DotFilledIcon />
                        </DropdownMenuItemIndicator>
                        Imperial (°F, mph)
                     </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuLabel>Weather service</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                     value={service}
                     onValueChange={setService}
                  >
                     <DropdownMenuRadioItem value="owm">
                        <DropdownMenuItemIndicator>
                           <DotFilledIcon />
                        </DropdownMenuItemIndicator>
                        OpenWeatherMap
                     </DropdownMenuRadioItem>
                     <DropdownMenuRadioItem value="smn">
                        <DropdownMenuItemIndicator>
                           <DotFilledIcon />
                        </DropdownMenuItemIndicator>
                        SMN (Argentina only)
                     </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                  <DropdownMenuArrow />
               </DropdownMenuContent>
            </DropdownMenu>
         </Box>
      </>
   );
}
