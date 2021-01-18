import { motion } from 'framer-motion';
import { styled } from '../../stitches.config';

export const StatsGaugeContainer = styled('span', {
  borderRadius: '10px',
  display: 'block',
  backgroundColor: 'white',
  width: `100%`,
});

export const StatsGauge = styled(motion.span, {
  borderRadius: '10px',
  display: 'block',
  backgroundColor: 'orangeRed',
  // This 👇🏼 is dynamic
  //   width: `${(base_stat / 255) * 100}%`,
  padding: '.1rem 1rem',
  borderBottom: '2px solid black',
});
