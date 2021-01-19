import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

export const Tag = styled(motion.div, {
  transition: 'background .3s ease-in-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  padding: '.25rem',

  color: 'white',
  textAlign: 'center',

  cursor: 'pointer',

  width: '4.5rem',

  fontSize: '.7rem',
  textTransform: 'capitalize',
  textShadow: '1px 1px 1px #000',

  borderRadius: '.5rem',

  position: 'relative',

  margin: '0 .25rem .25rem 0 ',

  img: {
    height: '1rem',
    display: 'inline-block',
    margin: '0 .3rem',
  },

  span: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  ':hover': {
    background: `#444`,
  },

  md: {
    padding: '.3rem',
    width: '6.5rem',
    fontSize: '.9rem',
  },
});