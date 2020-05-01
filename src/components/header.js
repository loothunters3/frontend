import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import tune from '../img/tunes/tune2.wav';

const HeaderContainer = styled.div`
    height: 72px;
    width: 95%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .fa-cog {
        font-size: 1.25rem;
        color: #fff9fb;
        cursor: pointer;
        transition: 0.25s;

        :hover {
            opacity: 0.75;
        }
    }

    .settings-dropdown {
        background-color: #2c2f33;
        border: 1px solid #d3d4d9;
        position: fixed;
        top: 51px;
        z-index: 9999;

        .option {
            padding: 16px 32px;
            border-bottom: 1px solid #252627;
            font-size: 0.625rem;
            color: #fff9fb;
            cursor: pointer;
            transition: 0.25s;

            i {
                font-size: 1rem;
                margin-right: 16px;
            }

            :hover {
                background-color: #fff9fb;
                color: #252627;
            }

            :nth-child(3) {
                border-bottom: none;
            }
        }

        a {
            text-decoration: none;   
        }
    }
`;

const audio = new Audio(tune);

const Header = props => {
    const [settingsDropdown, setSettingsDropdown] = useState(false);
    const [sound, setSound] = useState(false);

    const playAudio = () => {
        audio.play();
        audio.volume = 0.25;
    };

    const pauseAudio = () => {
        audio.pause();
    };

    const resetWorld = () => {
        axiosWithAuth().post('/adv/resetworld')
            .then(response => {
                console.log('FIRST LAYER', response);
                props.setChat([
                    'RESET WORLD',
                    'CONNECTING...'
                ]);
                axiosWithAuth().get('/adv/init')
                    .then(res => {
                        console.log('SECOND LAYER', res);
                        props.setCurrentRoom(JSON.parse(res.data.map));
                        props.setChat([
                            ...props.chat,
                            res.data.title,
                            res.data.description
                        ]);
                        props.setTerrain(res.data.terrain);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error));
    };

    const logOut = () => {
        axiosWithAuth().post('/logout/')
            .then(response => {
                console.log(response);
                localStorage.removeItem('token');
                props.history.push('/');
            })
            .catch(error => console.log(error));
    };

    return (
        <HeaderContainer>
            <i className='fas fa-cog' onClick={() => setSettingsDropdown(!settingsDropdown)}></i>
            {settingsDropdown && (
                <div className='settings-dropdown'>
                    {sound
                    ? <p className='option' onClick={() => {
                        setSound(false);
                        pauseAudio();
                    }}><i className='fas fa-volume-up'></i>MUTE TUNE</p>
                    : <p className='option' onClick={() => {
                        setSound(true);
                        playAudio();
                    }}><i className='fas fa-volume-mute'></i>UNMUTE TUNE</p>}
                    {/* <p className='option'><i className='fas fa-user-friends'></i>ABOUT THE TEAM</p> */}
                    <p className='option' onClick={resetWorld}><i className='fas fa-globe-americas'></i>RESET WORLD</p>
                    <a href='https://github.com/loothunters3/frontend/issues' target='_blank' rel='noreferrer noopener'><p className='option' onClick={() => setSettingsDropdown(false)}><i className='fas fa-bug'></i>REPORT A BUG</p></a>
                    <p className='option' onClick={logOut}><i className='fas fa-sign-out-alt'></i>LOG OUT</p>
                </div>
            )}
        </HeaderContainer>
    );
};

export default Header;