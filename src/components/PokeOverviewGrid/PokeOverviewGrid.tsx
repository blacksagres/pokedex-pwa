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

  // https://www.framer.com/api/motion/animation
  const variants = {
    backUp: (index: number) => ({
      y: 0,
      transition: {
        delay: index * 0.08,
      },
    }),
    downLow: { y: '10px' },
  }

  return (
    <StyledGrid>
      {pokemons.map((data, index) => (
        <PokeCard
          animate="backUp"
          initial="downLow"
          custom={index}
          variants={variants}
          id={data.Pokemon.name}
          key={data.Pokemon.name}
          pokemonData={data}
          onClick={(event: any) => {
            event.stopPropagation();
            history.push(`/summary/${data.Pokemon.name}`);
          }}
        />
      ))}
    </StyledGrid>
  );
};
