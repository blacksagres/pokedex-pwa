import type { FullPokemon } from '@definitions/FullPokemon';
import React from 'react';

export const SummaryEvolutionChain = (props: {
  evolutionChain: FullPokemon[][];
}): JSX.Element => {
  const { evolutionChain } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      {evolutionChain.length === 1 ? (
        <h4>This Pokémon has no evolutions.</h4>
      ) : null}
      {evolutionChain.map((evolutionLink, index) => (
        <div key={`evolution-link-${index}`}>
          {evolutionLink.map((evolutionInnerLink) => (
            <img
              key={`evolution-innerLink-${index}`}
              src={evolutionInnerLink.sprites.front_default}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
