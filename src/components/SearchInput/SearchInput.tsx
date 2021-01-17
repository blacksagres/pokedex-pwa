import React from 'react';
import { CustomInput } from './CustomInput.styles';

export const SearchInput = () => {
    return (
        <div style={{margin: '1rem 1rem 0 1rem'}}>
            <CustomInput placeholder="🔎 Search for a pokemon..." />
        </div>
    )
}