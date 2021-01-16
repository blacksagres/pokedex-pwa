import React from 'react';
import { useHistory } from 'react-router-dom';
import type { PokeEnrichedData } from '../../definitions';
import { PokeCard } from '../PokeCard/PokeCard';
import { StyledGrid } from './StyledGrid.styles';

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
