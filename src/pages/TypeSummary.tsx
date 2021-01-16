import React from 'react';
import { useParams } from 'react-router-dom';
import { TypeTagSwordAndShield } from '../components/TypeTag/TypeTagSwordShield'
import {
    SummaryBlock,
    SummaryBlockContent,
    SummaryBlockHeader,
} from '../components/SummaryBlock/SummaryBlock.styles';
import './TypeSummary.scss';


export const TypeSummary = (): React.ReactElement => {
    // @ts-ignore
    const { type } = useParams();

    return (
        <SummaryBlock  exit={{ opacity: 0 }} animate={{ opacity: 1 }} data-label="game-card">
            <SummaryBlockHeader>
                {type}
            </SummaryBlockHeader>
            <SummaryBlockContent className="type-summary-content">
                <div className="strengths">
                    Test
                </div>
                <div className="weaknesses">
                    Test
                </div>
            </SummaryBlockContent>
        </SummaryBlock>
    );
}