import { Separator } from '../../comps/Separator';
import { styled } from '../../styles/stitches.config';

const Main = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '1.3rem',
});

const Location = styled('h1', {
   all: 'unset',
   fontSize: '1.6rem',
   fontWeight: '900',
   color: '$color7',
   margin: '0',
   padding: '0',
   textAlign: 'center',
   textTransform: 'uppercase',
   letterSpacing: '0.1em',
   lineHeight: '1.2em',
});

const TempCluster = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
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
   lineHeight: '1.2em',
});

const TempRange = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '0.7rem',
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
   lineHeight: '1em',
});

const MiscCluster = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
});

const MiscSubCluster = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '0.3rem',
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
   lineHeight: '1.5em',
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
   lineHeight: '1.5em',
});

export default function Current({ data }: { data?: any }) {
   return (
      <Main>
         <Location>{data?.weather[0].main || '-'}</Location>
         <TempCluster>
            <Temperature>{data?.temp.toFixed(1) || '-'}°</Temperature>
            <Separator
               decorative
               orientation="vertical"
               css={{ margin: '0 15px' }}
            />
            <TempRange>
               <EdgeTemp>{data?.feels_like.toFixed(1) || '-'}°</EdgeTemp>
               <EdgeTemp>ST</EdgeTemp>
            </TempRange>
         </TempCluster>
         <MiscCluster>
            <MiscSubCluster>
               <MiscText>humidity</MiscText>
               <MiscData>{data?.humidity || '-'}%</MiscData>
            </MiscSubCluster>
            <MiscSubCluster>
               <MiscText>pressure</MiscText>
               <MiscData>{data?.pressure || '-'} hPa</MiscData>
            </MiscSubCluster>
            <MiscSubCluster>
               <MiscText>uv index</MiscText>
               <MiscData>{data?.uvi || '-'}</MiscData>
            </MiscSubCluster>
         </MiscCluster>
      </Main>
   );
}
