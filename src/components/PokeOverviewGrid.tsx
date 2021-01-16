import React from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from '../stitches.config';
import type { PokeEnrichedData } from '../definitions';
import { PokeCard } from './PokeCard/PokeCard';

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
  const { pokemons } = props;
  const history = useHistory();

  return (
    <StyledGrid>
      {pokemons.map((data) => (
        <PokeCard
          id={data.Pokemon.name}
          key={data.Pokemon.name}
          pokemonData={data}
          onClick={() => {
            history.push(`/summary/${data.Pokemon.name}`);
          }}
        />
      ))}
    </StyledGrid>
  );
};
