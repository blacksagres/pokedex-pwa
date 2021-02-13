import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TypeTagSwordAndShield } from '../components/TypeTag/TypeTagSwordShield'
import {
    SummaryBlock,
    SummaryBlockContent,
    SummaryBlockHeader,
    SummaryBlockInfo,
} from '../components/SummaryBlock/SummaryBlock.styles';
import './TypeSummary.scss';
import { PageContainer } from './PageContainer.styles';
import { SummaryLinks } from '@components/SummaryBlock/SummaryLinks';
import type {DoubleDamageFrom, DoubleDamageTo, HalfDamageFrom, HalfDamageTo, NoDamageFrom, PokeType } from '@definitions/PokemonType';
import { fetchTypes } from '../gateways/poke-gateway';
import type { TypeOnFullPokemon } from '@definitions/FullPokemon';


export const TypeSummary = (): React.ReactElement => {
    // @ts-ignore
    const { type } = useParams();
    const [typeData, setTypeData] = useState<PokeType>();

    useEffect(() => {
        fetchTypes({type: type}).then((typeResult) => setTypeData(typeResult))
    } , [])

    type damageRelations = {
        doubleDmgFrom: TypeOnFullPokemon[];
        doubleDmgTo: TypeOnFullPokemon[];
        halfDmgFrom: TypeOnFullPokemon[];
        halfDmgTo: TypeOnFullPokemon[];
        noDmgFrom: TypeOnFullPokemon[];
        noDmgTo: TypeOnFullPokemon[];
    }

    const getMappedDamageRelations = (): damageRelations | null => {
        if (!typeData) return null;
        const doubleDmgFrom: TypeOnFullPokemon[] = typeData.damage_relations.double_damage_from.map(t => { return { type: { name: t.name } } })
        const doubleDmgTo = typeData.damage_relations.double_damage_to.map(t => { return { type: { name: t.name } } })
        const halfDmgFrom = typeData.damage_relations.half_damage_from.map(t => { return { type: { name: t.name } } })
        const halfDmgTo = typeData.damage_relations.half_damage_to.map(t => { return { type: { name: t.name } } })
        const noDmgFrom = typeData.damage_relations.no_damage_from.map(t => { return { type: { name: t.name } } })
        const noDmgTo = typeData.damage_relations.no_damage_to.map(t => { return { type: { name: t.name } } })

        return { doubleDmgFrom, doubleDmgTo, halfDmgFrom, halfDmgTo, noDmgFrom, noDmgTo }
    }

    const mappedRelations = getMappedDamageRelations();

    return (
    <PageContainer exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <SummaryBlock exit={{ opacity: 0 }} animate={{ opacity: 1 }} data-label="game-card">
            <SummaryBlockHeader>
                Pokemon Type Overview
            </SummaryBlockHeader>
            { mappedRelations ?
            <SummaryBlockContent className="type-summary-content">
                <TypeTagSwordAndShield
                    mode="row"
                    types={[{type: { name: type }}]}
                />
                <SummaryBlockInfo className="strengths">
                    <h4>Strong against</h4>
                    <div className="typeSummaryContent">
                        <div><h5>Double damage to</h5>
                            <TypeTagSwordAndShield
                                mode="row"
                                types={mappedRelations.doubleDmgTo}
                            /></div>
                        <div><h5>Half damage from</h5>
                            <TypeTagSwordAndShield
                                mode="row"
                                types={mappedRelations.halfDmgFrom}
                            /></div>
                        <div><h5>No damage from</h5>
                            <TypeTagSwordAndShield
                                mode="row"
                                types={mappedRelations.noDmgFrom}
                            /></div>
                    </div>
                </SummaryBlockInfo>
                <SummaryBlockInfo className="weaknesses">
                    <h4>Weak against</h4>
                    <div className="typeSummaryContent">
                        <div><h5>Double damage from</h5>
                            <TypeTagSwordAndShield
                                mode="row"
                                types={mappedRelations.doubleDmgFrom}
                            />
                        </div>
                        <div><h5>Half damage to</h5>
                            <TypeTagSwordAndShield
                                mode="row"
                                types={mappedRelations.halfDmgTo}
                            /></div>
                        <div><h5>No damage to</h5>
                            <TypeTagSwordAndShield
                                mode="row"
                                types={mappedRelations.noDmgTo}
                            /></div>
                    </div>
                </SummaryBlockInfo>
            </SummaryBlockContent> : null}
        </SummaryBlock>
    </PageContainer>
    );
}