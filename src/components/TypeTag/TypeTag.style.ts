import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

export const Tag = styled(motion.div, {
  transition: 'background .3s ease-in-out',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  color: 'white',
  textAlign: 'center',

  cursor: 'pointer',

  width: '6rem',

  // this needs to be dynamically passed from the parent component
  // border: `.1rem solid ${typeColors[type.type.name]}`,
  borderLeft: '1.8rem',

  fontSize: '.7rem',
  textTransform: 'capitalize',
  textShadow: '1px 1px 1px #000',

  background: `#333`,

  borderRadius: '.5rem',

  position: 'relative',

  margin: '.25rem',

  img: {
    height: '1rem',
    display: 'inline-block',
    margin: '0 .3rem',
  },

  span: {
    display: 'block',
    width: '100%',
    // TODO: still deciding what to do with the buttons
    backgroundColor: '#black',
    fontWeight: 'bold',
    padding: '.3rem .5rem',
    borderRadius: '0 .5rem .5rem 0',
  },

  ':hover': {
    background: `#444`,
  },

  md: {
    width: '6.5rem',
    fontSize: '.9rem',
  },
});