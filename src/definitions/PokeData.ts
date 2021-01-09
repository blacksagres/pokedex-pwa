export interface PokeType {
  slot: string;
  type: {
    name: string;
    url: string;
  };
}

interface PokeBaseStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokeData {
  id: number;
  name: string;
  sprites: {
    front_default: 'string';
  };
  types: Array<PokeType>;
  stats: Array<PokeBaseStat>;
}

export default PokeData;
