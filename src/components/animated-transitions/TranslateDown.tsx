import { motion } from 'framer-motion';
import { styled } from '../../stitches.config';

const StyledContainer = styled(motion.div, {
  height: '100vh',
  width: '100vw',
  backgroundColor: 'purple',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 20
});

export const TranslateDown = StyledContainer;