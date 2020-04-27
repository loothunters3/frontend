import React from 'react';
import styled from 'styled-components';

const TutorialContainer = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 1.75rem;
        color: #fff9fb;
    }
`;

const Tutorial = () => {
    return (
        <TutorialContainer>
            <h1>HOW TO PLAY</h1>
        </TutorialContainer>
    );
};

export default Tutorial;