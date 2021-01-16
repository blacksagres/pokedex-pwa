export interface Move {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface Name {
    language: Language;
    name: string;
}

export interface Generation {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    generation: Generation;
}

export interface DoubleDamageFrom {
    name: string;
    url: string;
}

export interface DoubleDamageTo {
    name: string;
    url: string;
}

export interface HalfDamageFrom {
    name: string;
    url: string;
}

export interface HalfDamageTo {
    name: string;
    url: string;
}

export interface NoDamageFrom {
    name: string;
    url: string;
}


export interface DamageRelations {
    double_damage_from: DoubleDamageFrom[];
    double_damage_to: DoubleDamageTo[];
    half_damage_from: HalfDamageFrom[];
    half_damage_to: HalfDamageTo[];
    no_damage_from: NoDamageFrom[];
    no_damage_to: any[];
}

export interface PokemonOnTypeModel {
    name: string;
    url: string;
}

export interface PokeType {
    id: number;
    name: string;
    damage_relations: DamageRelations[];
    game_indices: GameIndice[];
    generation: Generation;
    moves: Move[];
    names: Name[];
    pokemon: PokemonOnTypeModel[]
}