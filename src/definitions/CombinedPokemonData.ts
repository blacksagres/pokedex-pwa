import type { FullPokemon } from "./FullPokemon";
import type { PokeType } from "./PokeTypeModels";

export interface CombinedPokemonData {
    Pokemon: FullPokemon;
    PokeTypes: PokeType[];
}