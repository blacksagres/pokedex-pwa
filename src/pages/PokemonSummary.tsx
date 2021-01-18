import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type {
  DoubleDamageFrom,
  DoubleDamageTo,
} from '@definitions/PokemonType';

import {
  SummaryBlock,
  SummaryBlockContent,
  SummaryBlockHeader,
  SummaryBlockImage,
  SummaryBlockInfo,
} from '@components/SummaryBlock/SummaryBlock.styles';
import { BaseStatuses } from '@components/BaseStatus/BaseStatus';
import { TypeTagSwordAndShield } from '@components/TypeTag/TypeTagSwordShield';
import type { CombinedPokemonData } from '@definitions/CombinedPokemonData';
import { fetchEnrichedPokeData } from '../gateways/poke-gateway';
import { PageContainer } from './PageContainer.styles';
import { motion } from 'framer-motion';
import { SummaryLinks } from '@components/SummaryBlock/SummaryLinks';

export const PokemonSummary = () => {
  const [pokemonData, setPokemonData] = useState<CombinedPokemonData | null>();
  const { pokemon } = useParams<{ pokemon: string }>();

  useEffect(() => {
    console.log(pokemon);
    if (!pokemon) return;
    fetchEnrichedPokeData({ pokemonName: pokemon }).then((pokeResult) =>
      setPokemonData(pokeResult)
    );
  }, []);

  if (!pokemonData) return null;
  console.log('HOI', pokemonData);
  return (
    <PageContainer exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* <TranslateDown exit={{ height: '100vh' }} animate={{ height: '0' }} /> */}
      <SummaryBlock data-label="game-card">
        <SummaryBlockHeader>
          <h1 style={{ fontSize: '1rem' }}>
            #{pokemonData.Pokemon.id} {pokemonData.Pokemon.name}
          </h1>
        </SummaryBlockHeader>
        <SummaryBlockContent>
          <SummaryBlockImage
            src={pokemonData.Pokemon.sprites.front_default}
            alt={pokemonData.Pokemon.name}
          />
          <div
            style={{
              margin: '0 auto 1rem auto'
            }}>
            <TypeTagSwordAndShield
              mode="row"
              types={pokemonData.Pokemon.types}
            />
          </div>
          <SummaryBlockInfo>
           <SummaryLinks links={['Info.', 'Stats', 'Evolution', 'Moves']} />
            {/* <h3 style={{ marginTop: 0 }}>Type(s)</h3>
            <TypeTagSwordAndShield
              mode="row"
              types={pokemonData.Pokemon.types}
            />
            <h3>Strong versus</h3>
            <TypeTagSwordAndShield
              mode="row"
              types={pokemonData.PokeTypes.map((pokeType) =>
                pokeType.damage_relations.double_damage_to.map(
                  (typeDoubleDamage: DoubleDamageTo) => ({
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
                  (typeDoubleDamage: DoubleDamageFrom) => ({
                    type: { name: typeDoubleDamage.name },
                  })
                )
              ).flat()}
            /> */}
            <BaseStatuses statuses={pokemonData.Pokemon.stats} />
          </SummaryBlockInfo>
        </SummaryBlockContent>
      </SummaryBlock>
    </PageContainer>
  );
};
