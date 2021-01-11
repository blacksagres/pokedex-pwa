import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { styled } from '../stitches.config';
import type { PokeEnrichedData } from '../definitions';
import { useClickAway } from 'react-use';

const Overlay = styled(motion.div, {
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'block',

  height: '100vh',
  width: '100vw',

  backgroundColor: 'rgba(0, 0, 0, .6)',
});


interface IPokeDialogProps {
  isOpen: boolean;
  close: () => void;
  pokemonData: PokeEnrichedData | null;
}

export const PokeDialog = (props: IPokeDialogProps) => {
  const { close, pokemonData } = props;
  const dialogRef = useRef(null);

  useClickAway(dialogRef, close);

  if (!pokemonData) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }}></Overlay>
    </AnimatePresence>,
    document.querySelector('body') as HTMLBodyElement
  );
};
