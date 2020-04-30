import React from 'react';
import styled from 'styled-components';
import wasd from '../img/wasd.png';
import arrows from '../img/arrows.png';
import m from '../img/m.png';

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

    .controls {
        .control {
            margin-bottom: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                height: 64px;
                margin-bottom: 16px;
            }

            .wasd-and-arrows {
                img:first-child {
                    margin-right: 16px;
                }   
            }

            .description {
                font-size: 0.875rem;
                font-weight: normal;
                color: #fff9fb;
            }

            :last-child {
                img {
                    height: 32px;
                }
            }
        }
    }

    button {
        padding: 10px 32px;
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

const Tutorial = props => {
    return (
        <TutorialContainer>
            <h1>HOW TO PLAY</h1>
            <div className='controls'>
                <div className='control'>
                    <div className='wasd-and-arrows'>
                        <img src={wasd} alt='wasd' />
                        <img src={arrows} alt='arrows' />
                    </div>
                    <p className='description'>MOVE CHARACTER</p>
                </div>
                <div className='control'>
                    <img src={m} alt='m' />
                    <p className='description'>VIEW MAP</p>
                </div>
            </div>
            <button onClick={() => props.history.push('/play')}>START PLAYING</button>
        </TutorialContainer>
    );
};

export default Tutorial;