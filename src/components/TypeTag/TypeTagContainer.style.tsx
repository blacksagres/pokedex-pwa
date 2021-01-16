import { styled } from '../../stitches.config';

export const TypeTagContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    mode: {
      row: {
        flexDirection: 'row',
        justifyContent: 'start',
        flexWrap: 'wrap',
      },
    },
  },
});
