import { motion } from 'framer-motion';
import { styled } from '../../stitches.config';

export const Overlay = styled(motion.div, {
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'block',

  height: '100vh',
  width: '100vw',

  backgroundColor: 'rgba(0, 0, 0, .6)',
});
