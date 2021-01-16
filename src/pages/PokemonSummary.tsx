import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TranslateDown } from '../components/animated-transitions/TranslateDown';
import {
  SummaryBlock,
  SummaryBlockContent,
  SummaryBlockHeader,
  SummaryBlockImage,
  SummaryBlockInfo,
} from '../components/SummaryBlock/SummaryBlock.styles';
import { TypeTagSwordAndShield } from '../components/TypeTag/TypeTagSwordShield';
import type { PokeEnrichedData } from '../definitions';
import { fetchEnrichedPokeData } from '../gateways/poke-gateway';

export const PokemonSummary = () => {
  const [pokemonData, setPokemonData] = useState<PokeEnrichedData | null>();
  const { pokemon } = useParams();

  useEffect(() => {
    console.log(pokemon);
    if (!pokemon) return;
    fetchEnrichedPokeData({ pokemonName: pokemon }).then((pokeResult) =>
      setPokemonData(pokeResult)
    );
  }, []);

  if (!pokemonData) return null;
  return (
    <>
      {/* <TranslateDown exit={{ height: '100vh' }} animate={{ height: '0' }} /> */}
      <SummaryBlock exit={{ opacity: 0 }} animate={{ opacity: 1 }} data-label="game-card">
        <SummaryBlockHeader>
          #{pokemonData.Pokemon.id} {pokemonData.Pokemon.name}
        </SummaryBlockHeader>
        <SummaryBlockContent>
          <SummaryBlockImage
            src={pokemonData.Pokemon.sprites.front_default}
            alt={pokemonData.Pokemon.name}
          />
          <SummaryBlockInfo>
            <TypeTagSwordAndShield mode="row" types={pokemonData.Pokemon.types} />
            <h3>Strong versus</h3>
            <TypeTagSwordAndShield
              mode="row"
              types={pokemonData.PokeTypes.map((pokeType) =>
                pokeType.damage_relations.double_damage_to.map(
                  (typeDoubleDamage) => ({
                    type: { name: typeDoubleDamage.name },
                  })
                )
              ).flat()}
            />
            <h3>Weak versus</h3>
            <TypeTagSwordAndShield
              mode="row"
              types={pokemonData.PokeTypes.map((pokeType) =>
                pokeType.damage_relations.double_damage_from.map(
                  (typeDoubleDamage) => ({
                    type: { name: typeDoubleDamage.name },
                  })
                )
              ).flat()}
            />
          </SummaryBlockInfo>
        </SummaryBlockContent>
      </SummaryBlock>
    </>
  );
};
