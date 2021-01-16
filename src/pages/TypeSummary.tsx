import React from 'react';
import { useParams } from 'react-router-dom';
import {GameCard, GameCardContent, GameCardHeader } from '../components/containers/StyledGameCard';
import './TypeSummary.scss'


export const TypeSummary = (): React.ReactElement => {
    const { type } = useParams();

    return (
        <GameCard data-label="game-card">
            <GameCardHeader>
                {type}
            </GameCardHeader>
            <GameCardContent>
                <div className="strengths">

                </div>
                <div className="weaknesses">

                </div>
            </GameCardContent>
        </GameCard>
    );
}