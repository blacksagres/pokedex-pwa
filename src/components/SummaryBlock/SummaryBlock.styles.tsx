import { styled } from '../../stitches.config';
import { motion } from 'framer-motion';

export const SummaryBlock = styled(motion.div, {
  borderRadius: '$card',

  maxWidth: '600px',

  transition: 'box-shadow .150s ease-in-out',
  boxShadow: '.25rem .25rem .25rem 1px rgba(0, 0, 0, .2)',

  backgroundColor: '$almost-white',
  cursor: 'auto',

  margin: '0 auto',

  ':hover': {
    boxShadow: '.25rem .25rem .75rem 1px rgba(0, 0, 0, .3)',
  },
});

export const SummaryBlockImage = styled('img', {
  display: 'block',
  height: '10rem',
  margin: '0 auto',

  padding: '0 2.5rem',

  boxShadow: 'inset 3px 3px 7px 7px rgba(0, 0, 0, .4)',

  md: {
    height: '12rem',
    padding: '0 8rem',
  },
});

export const SummaryBlockInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  padding: '0 1.5rem',

  md: {
    padding: '0 5rem',
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
