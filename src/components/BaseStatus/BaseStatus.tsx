import React from 'react';
import type { Stat } from '@definitions/FullPokemon';
import { StatsGauge, StatsGaugeContainer } from './StatsGaugeContainer.styles';

const BaseStatusGauge = (props: { stats: Stat }) => {
  const {
    stats: {
      base_stat,
      stat: { name },
    },
  } = props;

  const transforStatName = (name: string) => {
    if (name === 'special-attack') return 'sp. att';
    if (name === 'special-defense') return 'sp. def';
    return name;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '.5rem',
      }}
    >
      <span
        style={{
          display: 'block',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          width: '5.5rem',
          fontSize: '.8rem',
        }}
      >
        {transforStatName(name)}
      </span>
      <StatsGaugeContainer>
        <StatsGauge
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          css={{
            width: `${(base_stat / 255) * 100}%`,
          }}
          style={{
            originX: 0,
          }}
        >
          {base_stat}/255
        </StatsGauge>
      </StatsGaugeContainer>
    </div>
  );
};

export const BaseStatuses = (props: { statuses: Stat[] }) => {
  const { statuses } = props;
  console.table(statuses);
  return (
    <>
      <h3>
        Total base stats:{' '}
        {statuses
          .map((stats) => stats.base_stat)
          .reduce(
            (totalSoFar: number, currentValue: number) =>
              totalSoFar + currentValue
          )}
      </h3>
      {statuses.map((stats) => (
        <BaseStatusGauge
          key={`${stats.stat.name}-${stats.base_stat}`}
          stats={stats}
        />
      ))}
    </>
  );
};
