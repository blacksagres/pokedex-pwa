import type { TrimmedPokemonData } from 'gateways/poke-gateway';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PokeCard } from '../PokeCard/PokeCard';
import { StyledGrid } from './StyledGrid.styles';

interface IPokeOverviewGridProps {
  pokemons: TrimmedPokemonData[];
}

export const PokeOverviewGrid: React.FC<IPokeOverviewGridProps> = (props) => {
  const { pokemons } = props;
  const history = useHistory();

  // https://www.framer.com/api/motion/animation
  // TODO - maybe add this somewhere else
  // const variants = {
  //   backUp: (index: number) => ({
  //     y: 0,
  //     transition: {
  //       delay: index * 0.08,
  //     },
  //   }),
  //   downLow: { y: '10px' },
  // }

  return (
    <StyledGrid>
      {pokemons.map((data, index) => (
        <PokeCard
          key={data.name}
          pokemonData={data}
          onClick={(event: any) => {
            event.stopPropagation();
            history.push(`/summary/${data.name}`);
          }}
        />
      ))}
    </StyledGrid>
  );
};
