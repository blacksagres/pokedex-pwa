import React from 'react';
import type { CombinedPokemonData } from 'src/definitions/CombinedPokemonData';
import { bounce as bounceSprite } from '../../animations';
import { Card, CardHeader, CardContent } from '../containers/StyledCard';
import { TypeTagSwordAndShield } from '../TypeTag/TypeTagSwordShield';
import { PokeSprite } from './PokeSprite.styles';

type PokeCardProps = {
    id: string;
    pokemonData: CombinedPokemonData,
    onClick: (event: any) => void;
    custom: any;
    initial: any;
    animate: any;
    variants: any;
}

export const PokeCard = ({ id, pokemonData, onClick, custom, initial, animate, variants }: PokeCardProps) => {
  const animateSprite = (element: HTMLImageElement) => {
    if (!element) return;
    element.addEventListener('mouseenter', () => {
      bounceSprite({ element: element });
    });

    element.addEventListener('click', () => {
      bounceSprite({ element: element });
    });
  };

    return (
    <Card custom={custom} initial={initial} animate={animate} variants={variants} id={id} layoutId={id} onClick={onClick}>
      <CardHeader>
        #{pokemonData.Pokemon.id} {pokemonData.Pokemon.name}
      </CardHeader>
      <CardContent>
        <PokeSprite
          ref={animateSprite}
          src={pokemonData.Pokemon.sprites.front_default.toString()}
          alt="front_default"
        />
        <TypeTagSwordAndShield types={pokemonData.Pokemon.types} />
      </CardContent>
    </Card>
  );
};
