import { violet, violetDark, tomato, tomatoDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

const COLOR = 'violet';
const COLOR_DYNAMIC = 'tomato';

export const {
   styled,
   css,
   globalCss,
   keyframes,
   getCssText,
   theme,
   createTheme,
   config,
} = createStitches({
   media: {
      bp1: '(max-width: 600px)',
      bp2: '(max-width: 850px)',
      bp3: '(max-width: 970px)',

      bp4: '(max-width: 750px)',
   },

   theme: {
      fonts: {},
      space: {},
      sizes: {},
      fontSizes: {},
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      radii: {},
      zIndices: {},
      colors: {
         ...violet,

         color1: `$${COLOR}1`,
         color2: `$${COLOR}2`,
         color3: `$${COLOR}3`,
         color4: `$${COLOR}4`,
         color5: `$${COLOR}5`,
         color6: `$${COLOR}6`,
         color7: `$${COLOR}7`,
         color8: `$${COLOR}8`,
         color9: `$${COLOR}9`,
         color10: `$${COLOR}10`,
         color11: `$${COLOR}11`,
         color12: `$${COLOR}12`,
      },
   },
});

export const darkTheme = createTheme('dark-theme', {
   colors: {
      ...violetDark,

      color1: `$${COLOR}1`,
      color2: `$${COLOR}2`,
      color3: `$${COLOR}3`,
      color4: `$${COLOR}4`,
      color5: `$${COLOR}5`,
      color6: `$${COLOR}6`,
      color7: `$${COLOR}7`,
      color8: `$${COLOR}8`,
      color9: `$${COLOR}9`,
      color10: `$${COLOR}10`,
      color11: `$${COLOR}11`,
      color12: `$${COLOR}12`,
   },
});

export const dynamicTheme = createTheme('dynamic-theme', {
   colors: {
      ...tomatoDark,

      color1: `$${COLOR_DYNAMIC}1`,
      color2: `$${COLOR_DYNAMIC}2`,
      color3: `$${COLOR_DYNAMIC}3`,
      color4: `$${COLOR_DYNAMIC}4`,
      color5: `$${COLOR_DYNAMIC}5`,
      color6: `$${COLOR_DYNAMIC}6`,
      color7: `$${COLOR_DYNAMIC}7`,
      color8: `$${COLOR_DYNAMIC}8`,
      color9: `$${COLOR_DYNAMIC}9`,
      color10: `$${COLOR_DYNAMIC}10`,
      color11: `$${COLOR_DYNAMIC}11`,
      color12: `$${COLOR_DYNAMIC}12`,
   },
});
