import React from 'react';
import Character from './character';
import styled from 'styled-components';
import character from '../img/character.png';
import tile from '../img/tile.png';
import object from '../img/object.png';

const PlayContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 16px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff9fb;

        b {
            color: #bb0a21;
        }
    }

    .grid {
        height: 512px;
        width: 768px;
        background: white;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        position: relative;

        .tile {
            height: 32px;
            width: 32px;
            background: url(${tile});
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 32px;    
            }
        }
    }
`;

const Play = () => {
    const room = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    
    /*
    key:
    - 0: clear
    - 
    */

    return (
        <PlayContainer>
            <h1>LOOT HUNTERS <b>3</b></h1>
            <div className='grid'>
                <Character />
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
                {room.map((item, index) => <div className='tile'></div>)}
            </div>
        </PlayContainer>
    );
};

export default Play;