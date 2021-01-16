import React, { useRef } from 'react';
import { bounce as bounceSprite } from '../../animations';
import { Card, CardHeader, CardContent } from '../containers/StyledCard';
import { TypeTagSwordAndShield } from '../TypeTag/TypeTagSwordShield';
import { PokeSprite } from './PokeSprite.styles';

export const PokeCard = ({ id, pokemonData, onClick, custom, initial, animate, variants }) => {
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
    <Card custom={custom} initial={initial} animate={animate} variants={variants} id={id} layoutId={id} onClick={onClick}>
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
