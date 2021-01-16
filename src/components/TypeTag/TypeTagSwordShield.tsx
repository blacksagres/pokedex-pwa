import React from 'react';
import { typeColors } from '../../dynamic-styling/colors';
import type { PokeType } from '../../definitions/PokeData';
import { TypeTagContainer } from './TypeTagContainer.style';
import { Tag } from './TypeTag.style';

export const TypeTagSwordAndShield = ({ types, mode }) => {
  console.log(types);
  const getTypeTag = (type: PokeType) => {
    return <Tag css={{border: `.1rem solid ${typeColors[type.type.name]}`}} key={type.type.name}>{type.type.name}</Tag>;
  };

  return (
    <TypeTagContainer mode={mode}>{types.map(getTypeTag)}</TypeTagContainer>
  );
};
