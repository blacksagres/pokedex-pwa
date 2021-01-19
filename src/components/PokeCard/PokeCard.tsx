import React from 'react';
import type { CombinedPokemonData } from '@definitions/CombinedPokemonData';
import { Card, CardHeader, CardContent } from '../containers/StyledCard';
import { TypeTagSwordAndShield } from '../TypeTag/TypeTagSwordShield';
import { PokeSprite } from './PokeSprite.styles';

type PokeCardProps = {
  pokemonData: CombinedPokemonData;
  onClick: (event: any) => void;
  custom: any;
  initial: any;
  animate: any;
  variants: any;
};

export const PokeCard = ({
  pokemonData,
  onClick,
  custom,
  initial,
  animate,
  variants,
}: PokeCardProps) => {
  return (
    <Card
      custom={custom}
      initial={initial}
      animate={animate}
      variants={variants}
      id={pokemonData.Pokemon.name}
      layoutId={pokemonData.Pokemon.name}
      onClick={onClick}
    >
      <CardHeader>
        #{pokemonData.Pokemon.id} {pokemonData.Pokemon.name}
      </CardHeader>
      <CardContent>
        <PokeSprite
          src={pokemonData.Pokemon.sprites.front_default.toString()}
          alt="front_default"
        />
        <TypeTagSwordAndShield types={pokemonData.Pokemon.types} />
      </CardContent>
    </Card>
  );
};
