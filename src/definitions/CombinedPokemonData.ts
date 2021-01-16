import type { FullPokemon } from "./FullPokemon";
import type { PokeType } from "./PokemonType";

export interface CombinedPokemonData {
    Pokemon: FullPokemon;
    PokeTypes: PokeType[];
}