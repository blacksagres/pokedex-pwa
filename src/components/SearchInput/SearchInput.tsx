import type { CombinedPokemonData } from '@definitions/CombinedPokemonData';
import type { TrimmedPokemonData } from 'gateways/poke-gateway';
import React, { useState } from 'react';
import { CustomInput } from './CustomInput.styles';

type SearchInputProps = {
  fetchedPokemon: TrimmedPokemonData[];
  onChange: (pkmn: TrimmedPokemonData[]) => void;
};

export const SearchInput = ({ fetchedPokemon, onChange }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);

    if (!searchValue) {
      onChange(fetchedPokemon);
      return;
    }

    const newPkmnData = fetchedPokemon.filter((pkmn) =>
      pkmn.name.includes(searchValue.toLowerCase())
    );
    onChange(newPkmnData);
  };

  return (
    <div style={{ margin: '1rem 1rem 0 1rem' }}>
      <CustomInput
        css={{ letterSpacing: '.1rem' }}
        placeholder="🔎 Search for a pokemon..."
        value={searchTerm}
        onChange={(event: any) => handleSearch(event.target.value)}
      />
    </div>
  );
};
