import React from 'react';
import { useParams } from 'react-router-dom';
import {
    SummaryBlock,
    SummaryBlockContent,
    SummaryBlockHeader,
} from '../components/SummaryBlock/SummaryBlock.styles';
import './TypeSummary.scss';


export const TypeSummary = (): React.ReactElement => {
    const { type } = useParams();

    return (
        <SummaryBlock  exit={{ opacity: 0 }} animate={{ opacity: 1 }} data-label="game-card">
            <SummaryBlockHeader>
                {type}
            </SummaryBlockHeader>
            <SummaryBlockContent>
                <div className="strengths">

                </div>
                <div className="weaknesses">

                </div>
            </SummaryBlockContent>
        </SummaryBlock>
    );
}