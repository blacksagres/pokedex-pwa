import React, { useRef } from 'react';
import { bounce as bounceSprite } from '../../animations';
import { Card, CardHeader, CardContent } from '../containers/StyledCard';
import { TypeTagSwordAndShield } from '../TypeTagSwordShield';
import { PokeSprite } from './PokeSprite.styles';

export const PokeCard = ({ id, pokemonData, onClick }) => {
  const variants = {
    closed: { opacity: 1 },
    open: { opacity: 0.3 },
  };

  const animateSprite = (element) => {
    if (!element) return;
    element.addEventListener('mouseenter', () => {
      bounceSprite({ element: element });
    });

    element.addEventListener('click', () => {
      bounceSprite({ element: element });
    });
  };

  return (
    <Card variants={variants} id={id} layoutId={id} onClick={onClick}>
      <CardHeader>
        #{pokemonData.Pokemon.id} {pokemonData.Pokemon.name}
      </CardHeader>
      <CardContent>
        <PokeSprite
          ref={animateSprite}
          src={pokemonData.Pokemon.sprites.front_default}
          alt="front_default"
        />
        <TypeTagSwordAndShield types={pokemonData.Pokemon.types} />
      </CardContent>
    </Card>
  );
};
