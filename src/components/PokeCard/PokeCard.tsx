import React from 'react';
import { Card, CardHeader, CardContent } from '../containers/StyledCard';
import { TypeTagSwordAndShield } from '../TypeTag/TypeTagSwordShield';
import { PokeSprite } from './PokeSprite.styles';
import type { TrimmedPokemonData } from 'gateways/poke-gateway';

type PokeCardProps = {
  pokemonData: TrimmedPokemonData;
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
      id={pokemonData.name}
      layoutId={pokemonData.name}
      onClick={onClick}
    >
      <CardHeader>
        #{pokemonData.id} {pokemonData.name}
      </CardHeader>
      <CardContent>
        <PokeSprite
          src={pokemonData.sprites.front_default.toString()}
          alt="front_default"
        />
        <TypeTagSwordAndShield types={pokemonData.types} />
      </CardContent>
    </Card>
  );
};
