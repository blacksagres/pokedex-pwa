import { styled } from '../../stitches.config';
import { motion } from 'framer-motion';

export const SummaryBlock = styled(motion.div, {
  borderRadius: '$card',

  maxWidth: '800px',

  transition: 'box-shadow .150s ease-in-out',
  boxShadow: '.25rem .25rem .25rem 1px rgba(0, 0, 0, .2)',

  backgroundColor: '$almost-white',
  cursor: 'auto',

  margin: '0 auto',

  ':hover': {
    boxShadow: '.25rem .25rem .75rem 1px rgba(0, 0, 0, .3)',
  },
});

export const SummaryBlockImage = styled(motion.img, {
  display: 'block',
  height: '10rem',
  margin: '0 auto',

  md: {
    height: '12rem',
    padding: '0 8rem',
  },
});

export const SummaryBlockInfo = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$card',
  backgroundColor: '#eee',
  padding: '1rem',
  // border: '2px solid black',

  md: {
    padding: '2rem',
  },
});

export const SummaryBlockContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'column',
  padding: '1rem',
});

export const SummaryBlockStats = styled('div', {});

export const SummaryBlockHeader = styled('div', {
  position: 'relative',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',

  padding: '.3rem 0',

  backgroundColor: 'silver',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',

  md: {
    padding: '.5rem 0',
  },
});
