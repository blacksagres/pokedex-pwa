import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import type { PokeEnrichedData } from '../../definitions';
import { useClickAway } from 'react-use';
import { Overlay } from './Overlay.styles';

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
