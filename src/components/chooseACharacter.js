import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import miguel from '../img/miguel.png';
import dylan from '../img/dylan.png';
import maggie from '../img/maggie.png';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

axios.defaults.withCredentials = true;

const ChooseACharacterContainer = styled.div`
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

    .characters {
        margin-bottom: 32px;
        display: flex;

        .character {
            padding: 16px;
            margin: 0 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            transition: 0.25s;

            .image {
                height: 32px;
                width: 32px;
                margin-bottom: 16px;
            }

            .name {
                font-size: 0.625rem;
                font-weight: normal;
                color: #fff9fb;
                transition: 0.25s;
            }

            :hover {
                background-color: #fff9fb;

                .name {
                    color: #252627;
                }
            }

            :nth-child(1) {
                background-color: ${props => props.selectedCharacter === 1 ? '#fff9fb' : null};

                .name {
                    color: ${props => props.selectedCharacter === 1 ? '#252627' : null};
                }
            }

            :nth-child(2) {
                background-color: ${props => props.selectedCharacter === 2 ? '#fff9fb' : null};

                .name {
                    color: ${props => props.selectedCharacter === 2 ? '#252627' : null};
                }
            }

            :nth-child(3) {
                background-color: ${props => props.selectedCharacter === 3 ? '#fff9fb' : null};

                .name {
                    color: ${props => props.selectedCharacter === 3 ? '#252627' : null};
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

const ChooseACharacter = props => {
    const [selectedCharacter, setSelectedCharacter] = useState(1);

    // make call to api, get character id, if 0 stay, if something else, go to play right away
    useEffect(() => {
        axiosWithAuth().get('/adv/getplaychar')
            .then(response => {
                // existing user, redirect to play, maybe not so people can change their character
                if (response.data.char_id !== 0) {
                    props.history.push('/play');
                };
                // setSelectedCharacter(response.data.char_id);
            })
            .catch(error => console.log(error));
    }, []);

    const submit = () => {
        axiosWithAuth().put('/adv/setplaychar', { char_id: selectedCharacter })
            .then(response => {
                props.history.push('/tutorial');
            })
            .catch(error => console.log(error));
    };
    
    return (
        <ChooseACharacterContainer selectedCharacter={selectedCharacter}>
            <h1>CHOOSE A CHARACTER</h1>

            <div className='characters'>
                <div className='character' onClick={() => setSelectedCharacter(1)}>
                    <div className='image' style={{ backgroundImage: `url(${miguel})`, backgroundPosition: '-32px -0px' }}></div>
                    <p className='name'>MIGUEL</p>
                </div>
                <div className='character' onClick={() => setSelectedCharacter(2)}>
                    <div className='image' style={{ backgroundImage: `url(${dylan})`, backgroundPosition: '-32px -0px' }}></div>
                    <p className='name'>DYLAN</p>
                </div>
                <div className='character' onClick={() => setSelectedCharacter(3)}>
                    <div className='image' style={{ backgroundImage: `url(${maggie})`, backgroundPosition: '-32px -0px' }}></div>
                    <p className='name'>MAGGIE</p>
                </div>
            </div>

            {/* <button onClick={() => props.history.push('/tutorial')}>CONTINUE</button> */}
            <button onClick={submit}>CONTINUE</button>
        </ChooseACharacterContainer>
    );
};

export default ChooseACharacter;