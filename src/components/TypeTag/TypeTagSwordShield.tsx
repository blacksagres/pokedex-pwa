import React, { memo } from 'react';
import { generate as generateNewId } from 'shortid';
import { typeColors } from '../../dynamic-styling/colors';
import { TypeTagContainer } from './TypeTagContainer.style';
import { Tag } from './TypeTag.style';
import { hexToRgbA } from '../../dynamic-styling/hex-to-rba';
import { allTypes } from '../../assets/type-icons';
import { useHistory } from 'react-router-dom';
import type { TypeOnFullPokemon } from '@definitions/FullPokemon';

type TypeTagSwordShieldProps = {
  types: TypeOnFullPokemon[];
  mode?: "row";
}

export const TypeTagSwordAndShield = memo(({ types, mode }: TypeTagSwordShieldProps) => {
  const history = useHistory();

  // TODO: animate everytime?
  // https://www.framer.com/api/motion/animation
  const variants = {
    toTheLeft: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.08,
      },
    }),
    righty: { x: '10px', opacity: 0 },
  }

  const getTypeTag = (type: TypeOnFullPokemon, index: number) => {

    return <Tag
      animate="toTheLeft"
      initial="righty"
      custom={index}
      variants={variants}
      css={{
        border: `.1rem solid ${typeColors[type.type.name]}`,
        backgroundColor: hexToRgbA(typeColors[type.type.name]),

        ":hover": {
          background: typeColors[type.type.name],
        },
      }} key={`type.type.name-${generateNewId()}`} onClick={(event: any) => {
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
});
