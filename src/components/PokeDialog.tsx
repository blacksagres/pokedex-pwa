import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { styled } from '../stitches.config';
import type { PokeData, PokeEnrichedData } from '../definitions';
import {
  GameCard,
  GameCardHeader,
  GameCardContent,
  GameCardImage,
  GameCardInfo,
} from './containers/StyledGameCard';
import { TypeTagSwordAndShield } from './TypeTagSwordShield';
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

const PokeDialogContainer = styled(motion.div, {
  margin: '3rem auto',
  backgroundColor: '$card-bg',
  maxWidth: '20rem',
  borderRadius: '$card',

  md: {
    maxWidth: '40rem',
  },
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
      <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <PokeDialogContainer
          animate={{ opacity: 1, y: 50 }}
          exit={{ opacity: 0, y: 0 }}
          ref={dialogRef}
        >
          <GameCard data-label="game-card">
            <GameCardHeader>
              #{pokemonData.Pokemon.id} {pokemonData.Pokemon.name}
              <button
                style={{
                  position: 'absolute',
                  right: 10,
                }}
                onClick={close}
              >
                Close
              </button>
            </GameCardHeader>
            <GameCardContent>
              <GameCardImage
                src={pokemonData.Pokemon.sprites.front_default}
                alt={pokemonData.Pokemon.name}
              />
              <GameCardInfo>
                <TypeTagSwordAndShield
                  mode="row"
                  types={pokemonData.Pokemon.types}
                />
                <h3>Strong versus</h3>
                <TypeTagSwordAndShield
                  mode="row"
                  types={pokemonData.PokeTypes.map((pokeType) =>
                    pokeType.damage_relations.double_damage_to.map(
                      (typeDoubleDamage) => ({
                        type: { name: typeDoubleDamage.name },
                      })
                    )
                  ).flat()}
                />
              </GameCardInfo>
            </GameCardContent>
          </GameCard>
        </PokeDialogContainer>
      </Overlay>
    </AnimatePresence>,
    document.querySelector('body') as HTMLBodyElement
  );
};
