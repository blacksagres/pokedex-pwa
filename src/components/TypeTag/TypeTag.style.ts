import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

export const Tag = styled(motion.div, {
    transition: 'background .3s ease-in-out',

    padding: '.3rem 1rem',
    color: 'white',
    textAlign: 'center',

    cursor: 'pointer',

    width: '3rem',

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

    ':hover': {
      background: `#444`,
    },

    md: {
      padding: '.3rem 1rem',
      fontSize: '.9rem',
      width: '4rem',
    },
  });