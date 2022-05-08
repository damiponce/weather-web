import { styled } from '@stitches/react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
   backgroundColor: '$color6',
   '&[data-orientation=horizontal]': { height: 1 }, // width: '100%'
   '&[data-orientation=vertical]': { width: 1 }, // height: '100%',
});

export const Separator = StyledSeparator;
