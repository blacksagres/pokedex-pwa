import { styled } from '../../stitches.config';

export const StyledSummaryLink = styled('div', {
  boxSizing: 'border-box',
  padding: '.1rem',
  margin: '0 1rem',
  cursor: 'pointer',

  'div.link-bottom': {
    transition: 'transform .2s ease-in-out',
    height: '.2rem',
    borderRadius: '10px',
    backgroundColor: 'orangered',
    transform: 'scale(0)',
  },

  ':hover': {
    fontWeight: 'bold',
  },

  ':hover div.link-bottom': {
    transform: 'scaleX(1)',
  },
});

export const StyledSummaryLinks = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
});
