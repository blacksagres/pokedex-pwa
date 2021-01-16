import React from 'react';
import { typeColors } from '../../dynamic-styling/colors';
import { TypeTagContainer } from './TypeTagContainer.style';
import { Tag } from './TypeTag.style';
import { hexToRgbA } from '../../dynamic-styling/hex-to-rba';
import { allTypes } from '../../assets/type-icons';
import { useHistory } from 'react-router-dom';
import type { TypeOnFullPokemon } from 'src/definitions/FullPokemon';

type TypeTagSwordShieldProps = {
  types: TypeOnFullPokemon[];
  mode: string;
}

export const TypeTagSwordAndShield = ({ types, mode }: TypeTagSwordShieldProps) => {
  const history = useHistory();

  console.log(types);
  const getTypeTag = (type: TypeOnFullPokemon) => {

    return <Tag css={{
      border: `.1rem solid ${typeColors[type.type.name]}`,
      backgroundColor: hexToRgbA(typeColors[type.type.name]),

      ":hover": {
        background: typeColors[type.type.name],
      },
    }} key={type.type.name} onClick={(event: any) => {
      event.stopPropagation();
      history.push(`/type-summary/${type.type.name}`);
    }}>
      <img src={(allTypes[type.type.name])} alt={`type-icon-${type.type.name}`} />
      <span>{type.type.name}</span>
    </Tag>;
  };

  return (
    <TypeTagContainer mode={mode}>{types.map(getTypeTag)}</TypeTagContainer>
  );
};
