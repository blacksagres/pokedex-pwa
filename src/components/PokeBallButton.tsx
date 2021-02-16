import React from 'react';
import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const PokeCircle = styled(motion.div, {
  position: 'relative',
  cursor: 'pointer',
  border: '.15rem solid black',
  borderRadius: '50%',
  userSelect: 'none',
  backgroundColor: '$almost-white',

  width: '2rem',
  height: '2rem',

  md: {
    width: '3rem',
    height: '3rem',
    border: '.25rem solid black',
  },
});

const PokeCircleMedium = styled(motion.div, {
  position: 'absolute',
  cursor: 'pointer',
  borderRadius: '50%',
  userSelect: 'none',
  backgroundColor: '$almost-white',

  top: '50%',
  left: '50%',

  transform: 'translate(-50%, -50%)',

  border: '.15rem solid black',
  width: '.75rem',
  height: '.75rem',

  md: {
    border: '.25rem solid black',

    width: '1rem',
    height: '1rem',
  },
});

const PokeCircleSmall = styled(motion.div, {
  position: 'absolute',
  cursor: 'pointer',
  borderRadius: '50%',
  userSelect: 'none',
  backgroundColor: '$almost-white',

  top: '50%',
  left: '50%',

  transform: 'translate(-50%, -50%)',

  width: '.3rem',
  height: '.3rem',

  border: '.15rem solid black',

  md: {
    width: '.5rem',
    height: '.5rem',
  },
});

const HalfCircle = styled(motion.div, {
  boxSizing: 'border-box',

  background:
    'linear-gradient(90deg, rgba(132,22,23,1) 35%, rgba(210,18,46,1) 65%)',

  width: '2rem',
  height: '1rem',

  borderRadius: '2.5rem 2.5rem 0 0',
  borderBottom: '.2rem solid black',

  md: {
    width: '3rem',
    height: '1.5rem',
    borderBottom: '.3rem solid black',
  },
});

export const PokeBallButton = () => {
  const history = useHistory();

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 1 }}>
      <PokeCircle
        whileTap={{ rotate: 180, scale: 0.8 }}
        onTap={() => history.push('/')}
      >
        <HalfCircle data-label="half-circle" />
        <PokeCircleMedium />
        <PokeCircleSmall />
      </PokeCircle>
    </motion.div>
  );
};

export const PokeBallSpinner = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 1 }}>
      <PokeCircle
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      >
        <HalfCircle data-label="half-circle" />
        <PokeCircleMedium />
        <PokeCircleSmall />
      </PokeCircle>
    </motion.div>
  );
};
