import { styled } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
   display: 'inline-flex',
   backgroundColor: '$color6',
   borderRadius: 4,
   // boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
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
   '&:first-child': {
      marginLeft: 0,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
   },
   '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
   '&:hover': { backgroundColor: '$color4' },
   '&[data-state=on]': {
      backgroundColor: '$color5',
      color: '$color12',
   },
   '&:focus': { position: 'relative' },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;
