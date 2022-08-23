import React from 'react';
import { styled, keyframes } from '../styles/stitches.config';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

// const slideDown = keyframes({
//    from: { height: 0 },
//    to: { height: 'var(--radix-accordion-content-height)' },
// });

// const slideUp = keyframes({
//    from: { height: 'var(--radix-accordion-content-height)' },
//    to: { height: 0 },
// });

const slideDown = keyframes({
   from: { transform: 'scale(1, 0)' },
   to: {
      transform: 'scale(1, var(--radix-accordion-content-height))',
   },
});

const slideUp = keyframes({
   to: { transform: 'scale(1,0)' },
   from: {
      transform: 'scale(1, var(--radix-accordion-content-height))',
   },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
   borderRadius: 6,
   width: 'auto',
});

const StyledItem = styled(AccordionPrimitive.Item, {
   overflow: 'hidden',
   marginTop: 1,
   marginBottom: '16px',

   '&:first-child': {
      marginTop: 0,
   },

   '&:last-child': {
      marginBottom: '0',
   },

   '&:focus-within': {
      position: 'relative',
      zIndex: 1,
   },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
   all: 'unset',
   display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
   all: 'unset',
   fontFamily: 'inherit',
   backgroundColor: 'transparent',
   padding: '12px 24px',
   height: 45,
   flex: 1,
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   fontSize: 15,
   lineHeight: 1,
   borderRadius: '8px',
   zIndex: 6,
   color: '$color11',
   '&[data-state="closed"]': { backgroundColor: '$color4' },
   '&[data-state="open"]': { backgroundColor: '$color4' },
   '&:hover': { backgroundColor: '$color5' },
});

const StyledContent = styled(AccordionPrimitive.Content, {
   overflow: 'hidden',
   fontSize: 15,
   color: '$color11',
   backgroundColor: '$color3',
   borderBottomLeftRadius: '8px',
   borderBottomRightRadius: '8px',
   zIndex: 5,

   paddingTop: '8px',
   transform: 'translateY(-8px)',
   transformOrigin: '0 -8px',

   '&[data-state="open"]': {
      animation: `${slideDown} 0ms cubic-bezier(0.87, 0, 0.13, 1)`, // 300ms
   },
   '&[data-state="closed"]': {
      animation: `${slideUp} 0ms cubic-bezier(0.87, 0, 0.13, 1)`, // 300ms
   },
});

const StyledContentText = styled('div', {
   padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
   color: '$color10',
   transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
   '[data-state=open] &': { transform: 'rotate(180deg)' },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
   ({ children, ...props }, forwardedRef) => (
      <StyledHeader>
         {/*// @ts-ignore*/}
         <StyledTrigger {...props} ref={forwardedRef}>
            {children}
            {/* <StyledChevron aria-hidden /> */}
         </StyledTrigger>
      </StyledHeader>
   )
);
export const AccordionContent = React.forwardRef(
   ({ children, ...props }, forwardedRef) => (
      // @ts-ignore
      <StyledContent {...props} ref={forwardedRef}>
         <StyledContentText>{children}</StyledContentText>
      </StyledContent>
   )
);
