import React from 'react';
import { typeColors } from '../../dynamic-styling/colors';
import type { PokeType } from '../../definitions/PokeData';
import { TypeTagContainer } from './TypeTagContainer.style';
import { Tag } from './TypeTag.style';
import { hexToRgbA } from '../../dynamic-styling/hex-to-rba';
import { allTypes } from '../../assets/type-icons';

export const TypeTagSwordAndShield = ({ types, mode }) => {


  console.log(types);
  const getTypeTag = (type: PokeType) => {
    const backgroundStyle = `linear-gradient(0deg, ${typeColors[type.type.name]
      } 15%, ${hexToRgbA(typeColors[type.type.name])} 100%)`;
    const backgroundStyleOnHover = `linear-gradient(0deg, ${typeColors[type.type.name]
      } 45%, ${hexToRgbA(typeColors[type.type.name])} 100%)`;

    return <Tag css={{
      border: `.1rem solid ${typeColors[type.type.name]}`,
      backgroundColor: hexToRgbA(typeColors[type.type.name]),
      backgroundImage: `url(${allTypes[type.type.name]})`,

      ":hover": {
        background: backgroundStyleOnHover,
      },
    }} key={type.type.name}>{type.type.name}</Tag>;
  };

  return (
    <TypeTagContainer mode={mode}>{types.map(getTypeTag)}</TypeTagContainer>
  );
};
