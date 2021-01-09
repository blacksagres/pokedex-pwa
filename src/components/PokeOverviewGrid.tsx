import React, { useState } from 'react';
import { styled } from '../stitches.config';
import type { PokeData } from '../definitions';
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
  pokemons: PokeData[];
}

export const PokeOverviewGrid: React.FC<IPokeOverviewGridProps> = (props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [
    currentViewingPokemon,
    setCurrentViewingPokemon,
  ] = useState<PokeData | null>(null);

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
      {pokemons.map((pokemon) => (
        <PokeCard
          id={pokemon.name}
          key={pokemon.name}
          pokemonData={pokemon}
          isSelected={pokemon.name === currentViewingPokemon?.name}
          onClick={() => {
            setCurrentViewingPokemon(pokemon);
            setOpenDialog(true);
          }}
        />
      ))}
    </StyledGrid>
  );
};
