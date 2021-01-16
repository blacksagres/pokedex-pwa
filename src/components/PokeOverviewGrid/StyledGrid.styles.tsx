import { styled } from '../../stitches.config';

export const StyledGrid = styled('div', {
  padding: '1rem',
  position: 'relative',

  md: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
  },
  lg: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
});
