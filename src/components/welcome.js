import React, { useEffect } from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
    height: 90vh;
    width: 972.8px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 16px;
        font-size: 2.5rem;
        font-weight: bold;
        color: #fff9fb;

        b {
            margin-left: 32px;
            color: #bb0a21;
        }
    }

    p {
        margin-bottom: 32px;
        font-size: 0.75rem;
        font-weight: normal;
        color: #fff9fb;
        line-height: 1.5rem;
        text-align: center;
    }
    
    button {
        padding: 16px 32px;
        background-color: #4b88a2;
        border: 1px solid #d3d4d9;
        font-family: 'Press Start 2P', cursive;
        font-size: 0.75rem;
        font-weight: normal;
        color: #fff9fb;
        cursor: pointer;
        transition: 0.25s;
    
        :hover {
            opacity: 0.75;
        }
    }
`;

const Welcome = props => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.history.push('/select');
        };
    }, []);

    return (
        <WelcomeContainer>
            <h1>LOOT HUNTERS<b>3</b></h1>
            <p>AN ADVENTURE GAME WITH HUNDREDS OF ROOMS TO WANDER, MONSTERS TO BATTLE, AND TREASURE TO DISCOVER!</p>
            <button onClick={() => props.history.push('/register')}>PLAY NOW</button>
        </WelcomeContainer>
    );
};

export default Welcome;