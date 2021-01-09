import React, { useState } from 'react';
import { styled } from '../stitches.config';
import type { PokeData, PokeEnrichedData } from '../definitions';
import { PokeCard } from './PokeCard';
import { PokeDialog } from './PokeDialog';

const StyledGrid = styled('div', {
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

interface IPokeOverviewGridProps {
  pokemons: PokeEnrichedData[];
}

export const PokeOverviewGrid: React.FC<IPokeOverviewGridProps> = (props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [
    currentViewingPokemon,
    setCurrentViewingPokemon,
  ] = useState<PokeEnrichedData | null>(null);

  const { pokemons } = props;

  return (
    <StyledGrid>
      <PokeDialog
        isOpen={openDialog}
        pokemonData={currentViewingPokemon}
        close={() => {
          setOpenDialog(false);
          setCurrentViewingPokemon(null);
        }}
      />
      {pokemons.map((data) => (
        <PokeCard
          id={data.Pokemon.name}
          key={data.Pokemon.name}
          pokemonData={data}
          isSelected={data.Pokemon.name === currentViewingPokemon?.Pokemon.name}
          onClick={() => {
            setCurrentViewingPokemon(data);
            setOpenDialog(true);
          }}
        />
      ))}
    </StyledGrid>
  );
};
