import { styled } from '../styles/stitches.config';

const Main = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   gap: '0.6rem',
   alignItems: 'center',
   maxWidth: '50%',

   '@bp2': {
      maxWidth: '75%',
   },
});

const Temp = styled('span', {
   all: 'unset',
   fontSize: '1.4rem',
   fontWeight: '500',
   color: '$color12',
   margin: '0',
   padding: '0',
   textAlign: 'center',
   lineHeight: '1.2em',
   flexBasis: '5rem', // <-- CHECK WITH BIG TEMPERATURE NUMBERS !!!!!!!!!!!
   // flex: 1,

   '&:first-of-type': {
      textAlign: 'right',
   },
   '&:last-of-type': {
      textAlign: 'left',
   },
});

const Slash = styled('span', {
   all: 'unset',
   fontSize: '1.4rem',
   fontWeight: '500',
   color: '$color12',
   margin: '0',
   padding: '0',
   textAlign: 'center',
   lineHeight: '1.2em',

   display: 'none',
   '@bp1': {
      display: 'block',
   },
});

const Base = styled('div', {
   flexGrow: 1,
   height: '1.3rem',
   borderRadius: '0.75rem',
   backgroundColor: '$color6',

   '@bp1': {
      display: 'none',
   },
});

const Delta = styled('div', {
   height: '1.3rem',
   borderRadius: '0.75rem',
   // background: 'linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)',
   backgroundColor: '$color8',

   '@bp1': {
      display: 'none',
   },
});

export default function TempDelta({
   flex,
   min,
   max,
   lower,
   upper,
}: {
   flex: number;
   min: number;
   max: number;
   lower: number;
   upper: number;
}) {
   const real_lower = lower;
   const real_upper = upper;

   if (lower < min) lower = min;
   if (upper > max) upper = max;

   const DELTA = max - min;

   const lower_delta = ((lower - min) * 100) / DELTA;
   const upper_delta = ((max - upper) * 100) / DELTA;

   return (
      <Main css={{ flex: flex }}>
         <Temp>{real_lower}°</Temp>
         <Slash>/</Slash>
         <Base id="_base">
            <Delta
               css={{
                  marginInlineStart: lower_delta + '%',
                  marginInlineEnd: upper_delta + '%',
               }}
            />
         </Base>
         <Temp>{real_upper}°</Temp>
      </Main>
   );
}
