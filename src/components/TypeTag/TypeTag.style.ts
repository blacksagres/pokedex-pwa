import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

export const Tag = styled(motion.div, {
    transition: 'background .3s ease-in-out',

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-start',

    padding: '.3rem .5rem',
    color: 'white',
    textAlign: 'center',

    cursor: 'pointer',

    width: '5.5rem',

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
      marginRight: '.5rem',
    },

    span: {
      display: 'block',
      width: '100%'
    },

    ':hover': {
      background: `#444`,
    },

    md: {
      width: '6rem',
      fontSize: '.9rem',
    },
  });