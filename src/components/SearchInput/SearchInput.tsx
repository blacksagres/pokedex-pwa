import type { CombinedPokemonData } from '@definitions/CombinedPokemonData';
import type { TrimmedPokemonData } from 'gateways/poke-gateway';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { CustomInput } from './CustomInput.styles';

type SearchInputProps = {
  onChange: (pkmn: string) => void;
};

export const SearchInput = ({ onChange }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedValue] = useDebounce(searchTerm, 300);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div style={{ margin: '1rem 1rem 0 1rem' }}>
      <CustomInput
        css={{ letterSpacing: '.1rem' }}
        placeholder="🔎 Search for a pokemon..."
        value={searchTerm}
        onChange={(event: any) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};
