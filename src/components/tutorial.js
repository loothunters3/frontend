import React from 'react';
import styled from 'styled-components';

const TutorialContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 32px;
        font-size: 1.75rem;
        color: #fff9fb;
    }

    button {
        padding: 10px 32px;
        margin-top: 16px;
        margin-bottom: 16px;
        background-color: #4b88a2;
        border: 1px solid #d3d4d9;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.75rem;
        font-weight: normal;
        color: #fff9fb;
        cursor: pointer;
    }
`;

const Tutorial = props => {
    return (
        <TutorialContainer>
            <h1>HOW TO PLAY</h1>
            <button onClick={() => props.history.push('/play')}>START PLAYING</button>
        </TutorialContainer>
    );
};

export default Tutorial;