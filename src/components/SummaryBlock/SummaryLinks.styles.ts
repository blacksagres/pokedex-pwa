import { styled } from '../../stitches.config';

export const HoverBar = styled('div', {
  transition: 'transform .2s ease-in-out',
  height: '.2rem',
  borderRadius: '10px',
  backgroundColor: 'orangered',
  transform: 'scale(0)',
});

export const StyledSummaryLink = styled('div', {
  boxSizing: 'border-box',
  padding: '1rem',
  cursor: 'pointer',
  opacity: '.8',

  ':hover': {
    opacity: '1',
  },

  [`:hover ${HoverBar}`]: {
    transform: 'scaleX(1)',
  },

  variants: {
    isCurrent: {
      true: {
        opacity: 1,

        [`${HoverBar}`]: {
          transform: 'scaleX(1)',
        },
      },
    },
  },
});

export const StyledSummaryLinks = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
});
