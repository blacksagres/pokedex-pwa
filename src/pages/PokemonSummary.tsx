import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import type {
  DoubleDamageFrom,
  DoubleDamageTo,
  PokeType,
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
import { SummaryLinks } from '@components/SummaryBlock/SummaryLinks';
import { useAsync } from 'react-use';
import { PokeLoader } from '@components/PokeBallButton';

export const PokemonSummary = () => {
  const [currentTab, setCurrentTab] = useState('Info.');
  const history = useHistory();
  const { pokemon } = useParams<{ pokemon: string }>();
  const { error, value: pokemonData, loading } = useAsync(async () => {
    const pkmnNames = await fetchEnrichedPokeData({ pokemonName: pokemon });

    return pkmnNames;
  }, [pokemon]);

  // From the api docs: The height of this Pokémon in decimetres.
  const parseHeight = (pokeHeight: number) => pokeHeight / 10;

  // From the api docs: The height of this Pokémon in hectograms.
  const parseWeight = (pokeWeight: number) => pokeWeight / 10;

  /**
   * For the strengths we don't care about duplicates because
   * each move only has one type.
   *
   * This is a tricky function.
   */
  const filterTypes = useCallback(
    (
      pokeTypes: PokeType[],
      propertyToSearch: 'double_damage_to' | 'double_damage_from',
      duplicates?: boolean
    ) => {
      const seen = new Set();

      if (duplicates) {
        return (
          pokeTypes
            .map((pokeType) => pokeType.damage_relations[propertyToSearch])
            .flat()
            // get the duplicates from the array
            .filter((damageData, index, currentArray) => {
              return (
                currentArray.filter(
                  (searchableItem) => searchableItem.name === damageData.name
                ).length > 1
              );
            })
            // remove duplicates from the duplicates
            .filter((damageData) => {
              const duplicate = seen.has(damageData.name);
              seen.add(damageData.name);
              return !duplicate;
            })
            .map((flatDamage) => ({ type: { name: flatDamage.name } }))
        );
      }

      const result: { type: { name: string } }[] = [];

      pokeTypes.forEach((pokeType) => {
        pokeType.damage_relations[propertyToSearch].forEach((damageTo) => {
          if (
            result.find(
              (unduplicated) => unduplicated.type.name === damageTo.name
            )
          )
            return;
          result.push({ type: { name: damageTo.name } });
        });
      });

      return result;
    },
    [pokemonData]
  );

  if (loading) return <PokeLoader />;
  if (!pokemonData) return null;

  const veryWeakTo = filterTypes(
    pokemonData.PokeTypes,
    'double_damage_from',
    true
  );

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
              margin: '0 auto 1rem auto',
            }}
          >
            <TypeTagSwordAndShield
              mode="row"
              types={pokemonData.Pokemon.types}
            />
          </div>
          <SummaryBlockInfo>
            <SummaryLinks
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              links={['Info.', 'Stats', 'Evolutions', 'Moves']}
            />
            {currentTab === 'Info.' && (
              <>
                <h4 style={{ marginBottom: 0 }}>
                  Height: {parseHeight(pokemonData.Pokemon.height)}m
                </h4>
                <h4 style={{ marginBottom: 0, marginTop: 0 }}>
                  Weight: {parseWeight(pokemonData.Pokemon.weight)}kg
                </h4>
                <h4>Strong versus</h4>
                <TypeTagSwordAndShield
                  mode="row"
                  types={filterTypes(pokemonData.PokeTypes, 'double_damage_to')}
                />
                <h4>Weak to (2x damage from)</h4>
                <TypeTagSwordAndShield
                  mode="row"
                  types={filterTypes(
                    pokemonData.PokeTypes,
                    'double_damage_from'
                  )}
                />
                {veryWeakTo.length > 0 && (
                  <>
                    <h4>Very weak to (4x damage from)</h4>
                    <TypeTagSwordAndShield mode="row" types={veryWeakTo} />
                  </>
                )}
              </>
            )}
            {currentTab === 'Stats' && (
              <BaseStatuses statuses={pokemonData.Pokemon.stats} />
            )}
            {currentTab === 'Evolutions' && pokemonData.EvolvesFrom && (
              <>
                <h5>Evolves from:</h5>
                <SummaryBlockImage
                  initial={{
                    y: -10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  css={{
                    cursor: 'pointer',
                  }}
                  onClick={() =>
                    history.push(`/summary/${pokemonData.EvolvesFrom!.name}`)
                  }
                  src={pokemonData.EvolvesFrom.sprites.front_default}
                  alt={pokemonData.EvolvesFrom.name}
                />
              </>
            )}
          </SummaryBlockInfo>
        </SummaryBlockContent>
      </SummaryBlock>
    </PageContainer>
  );
};
