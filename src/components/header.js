import React, { useState } from 'react';
import styled from 'styled-components';

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

const Header = props => {
    const [settingsDropdown, setSettingsDropdown] = useState(false);
    const [sound, setSound] = useState(false);

    const logOut = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    };

    return (
        <HeaderContainer>
            <i className='fas fa-cog' onClick={() => setSettingsDropdown(!settingsDropdown)}></i>
            {settingsDropdown && (
                <div className='settings-dropdown'>
                    {sound
                    ? <p className='option' onClick={() => setSound(false)}><i className='fas fa-volume-up'></i>MUTE SOUND</p>
                    : <p className='option' onClick={() => setSound(true)}><i className='fas fa-volume-mute'></i>UNMUTE SOUND</p>}
                    {/* <p className='option'><i className='fas fa-user-friends'></i>ABOUT THE TEAM</p> */}
                    <a href='https://github.com/loothunters3/frontend/issues' target='_blank' rel='noreferrer noopener'><p className='option' onClick={() => setSettingsDropdown(false)}><i className='fas fa-bug'></i>REPORT A BUG</p></a>
                    <p className='option' onClick={logOut}><i className='fas fa-sign-out-alt'></i>LOG OUT</p>
                </div>
            )}
        </HeaderContainer>
    );
};

export default Header;