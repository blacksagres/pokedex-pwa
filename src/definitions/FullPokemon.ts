export interface Ability {
  name: string;
  url: string;
}

export interface Form {
  name: string;
  url: string;
}

export interface Sprite {
  back_default: string;
  back_female: string
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string
  front_shiny_female: string
}

export interface StatInfo {
  name: string;
  url: string
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: StatInfo
}

export interface TypeInfo {
  name: string;
  url?: string;
}

export interface TypeOnFullPokemon {
  slot?: number;
  type: TypeInfo
}

export interface Species {
  name: string;
  url: string;
}

export interface FullPokemon {
  id: number;
  name: string;
  sprites: Sprite;
  stats: Stat[]
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  height: number;
  types: TypeOnFullPokemon[];
  weight: number;
  species: Species;
}
