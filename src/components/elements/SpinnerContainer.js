import React from 'react';
import { StyledSpinnerContainer } from '../../styles';

const SpinnerContainer = () => (
    <StyledSpinnerContainer>
        <div className="loader"></div>
        <span>Loading...</span>
    </StyledSpinnerContainer>
)
export default SpinnerContainer;