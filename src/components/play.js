import React, { useState, useEffect } from 'react';
import Header from './header';
import Character from './character';
import styled from 'styled-components';
import desertTile0 from '../img/desertTile0.png';
import desertTile1 from '../img/desertTile1.png';
import desertTile2 from '../img/desertTile2.png';
import desertTile3 from '../img/desertTile3.png';
import desertTile4 from '../img/desertTile4.png';
import desertTile5 from '../img/desertTile5.png';
import desertTile6 from '../img/desertTile6.png';
import desertTile7 from '../img/desertTile7.png';
import desertTile8 from '../img/desertTile8.png';
import desertObject1 from '../img/desertObject1.png';
import desertObject2 from '../img/desertObject2.png';
import desertObject3 from '../img/desertObject3.png';
import door1 from '../img/door1.png';
import door2 from '../img/door2.png';
import door3 from '../img/door3.png';
import door4 from '../img/door4.png';

const PlayContainer = styled.div`
    height: calc(90vh - 72px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 32px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff9fb;

        b {
            color: #bb0a21;
        }
    }

    .chat-and-grid-container {
        display: flex;

        .chat {
            width: 304px;
            padding: 16px;
            margin-right: 16px;
            background-color: #2c2f33;
            border: 1px solid #d3d4d9;
            display: flex;
            flex-direction: column;

            h2 {
                margin-bottom: 16px;
                font-size: 0.625rem;
                font-weight: normal;
                color: #fff9fb;
                text-align: center;
            }

            .messages {
                height: 452px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                overflow: auto;

                .message {
                    margin-bottom: 8px;
                    font-size: 0.625rem;
                    font-weight: normal;
                    color: #fff9fb;
                    line-height: 1rem;
                }
            }
        }

        .grid {
            height: 512px;
            width: 768px;
            display: flex;
            align-content: flex-start;
            flex-wrap: wrap;
            position: relative;
    
            .tile {
                height: 32px;
                width: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
    
                img {
                    width: 32px;
                }
            }
        }
    }
`;

const Play = props => {
    const room1 = [
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 4],
        [12, 0, 0, 15, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]
    ];

    const room2 = [
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 11, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]
    ];

    const [currentRoom, setCurrentRoom] = useState(room1);
    const [chat, setChat] = useState([
        'CONNECTING...',
        'YOU\'VE ENTERED THE DESERT.',
        'DRY, MOIST, WHATEVER'
    ]);

    // useEffect(() => setCurrentRoom(room1), []);

    return (
        <>
            <Header history={props.history} />
            <PlayContainer>
                <h1>LOOT HUNTERS <b>3</b></h1>
                <div className='chat-and-grid-container'>
                    <div className='chat'>
                        <h2>CHAT</h2>
                        <div className='messages'>
                            {chat.map((message, index) => <p className='message'>{message}</p>)}
                        </div>
                    </div>
                
                    <div className='grid'>
                        <Character currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} room2={room2} />
                        {currentRoom.map(row => row.map((tile, index) => (
                            <>
                                {tile === 0 && <div key={index} className='tile' style={{ background: `url(${desertTile0})`, backgroundSize: 'contain' }}></div>}
                                {tile === 1 && <div key={index} className='tile' style={{ background: `url(${desertTile1})`, backgroundSize: 'contain' }}></div>}
                                {tile === 2 && <div key={index} className='tile' style={{ background: `url(${desertTile2})`, backgroundSize: 'contain' }}></div>}
                                {tile === 3 && <div key={index} className='tile' style={{ background: `url(${desertTile3})`, backgroundSize: 'contain' }}></div>}
                                {tile === 4 && <div key={index} className='tile' style={{ background: `url(${desertTile4})`, backgroundSize: 'contain' }}></div>}
                                {tile === 5 && <div key={index} className='tile' style={{ background: `url(${desertTile5})`, backgroundSize: 'contain' }}></div>}
                                {tile === 6 && <div key={index} className='tile' style={{ background: `url(${desertTile6})`, backgroundSize: 'contain' }}></div>}
                                {tile === 7 && <div key={index} className='tile' style={{ background: `url(${desertTile7})`, backgroundSize: 'contain' }}></div>}
                                {tile === 8 && <div key={index} className='tile' style={{ background: `url(${desertTile8})`, backgroundSize: 'contain' }}></div>}
                                {tile === 9 && <div key={index} className='tile' style={{ background: `url(${desertTile2})`, backgroundSize: 'contain' }}>
                                    <img src={door1} alt='door1' />
                                </div>}
                                {tile === 10 && <div key={index} className='tile' style={{ background: `url(${desertTile4})`, backgroundSize: 'contain' }}>
                                    <img src={door2} alt='door2' />
                                </div>}
                                {tile === 11 && <div key={index} className='tile' style={{ background: `url(${desertTile6})`, backgroundSize: 'contain' }}>
                                    <img src={door3} alt='door3' />
                                </div>}
                                {tile === 12 && <div key={index} className='tile' style={{ background: `url(${desertTile8})`, backgroundSize: 'contain' }}>
                                    <img src={door4} alt='door4' />
                                </div>}
                                {tile === 13 && <div key={index} className='tile' style={{ background: `url(${desertTile0})`, backgroundSize: 'contain' }}>
                                    <img src={desertObject1} alt='desertObject1' />
                                </div>}
                                {tile === 14 && <div key={index} className='tile' style={{ background: `url(${desertTile0})`, backgroundSize: 'contain' }}>
                                    <img src={desertObject2} alt='desertObject2' />
                                </div>}
                                {tile === 15 && <div key={index} className='tile' style={{ background: `url(${desertTile0})`, backgroundSize: 'contain' }}>
                                    <img src={desertObject3} alt='desertObject3' />
                                </div>}
                                
                                {/* <div key={index} className='tile' style={{ background: `url(${})`, backgroundSize: 'contain' }}>
                                    {tile === 9 && <img src={door1} />}
                                    {tile === 10 && <img src={door2} />}
                                    {tile === 11 && <img src={door3} />}
                                    {tile === 12 && <img src={door4} />}
                                    {tile === 13 && <img src={desertObject1} />}
                                    {tile === 14 && <img src={desertObject2} />}
                                    {tile === 15 && <img src={desertObject3} />}
                                </div> */}
                            </>
                        )))}
                    </div>
                </div>
            </PlayContainer>
        </>
    );
};

export default Play;