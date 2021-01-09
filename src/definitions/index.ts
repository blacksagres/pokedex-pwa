import type { default as PokeData } from './PokeData';
import type { PokeDataType } from './PokeDataType';

interface PokeEnrichedData {
  Pokemon: PokeData;
  PokeTypes: PokeDataType[];
}

export { PokeData, PokeDataType, PokeEnrichedData };
