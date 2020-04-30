import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import styled from 'styled-components';
import sprite from '../img/sprite.png';
import zelda from '../img/zelda.png';

const CharacterContainer = styled.div`
    height: 32px;
    width: 32px;
    background: url(${zelda});
    background-position: ${props => `-${props.step * 32}px -${props.movement.current}px`};
    position: absolute;
    top: ${props => `${props.position.top}px`};
    left: ${props => `${props.position.left}px`};
`;

const Character = () => {
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    });
    const [movement, setMovement] = useState({
        current: 0,
        previous: 0
    });
    const [step, setStep] = useState(0);

    useEventListener('keydown', event => {
        switch (event.code) {
            case 'KeyS':
            case 'ArrowDown':
                setMovement(prevState => ({
                    current: 0,
                    previous: prevState.current
                }));
                setPosition({
                    ...position,
                    top: position.top >= 480 ? position.top : position.top + 32
                });
                break;
                
            case 'KeyA':
            case 'ArrowLeft':
                setMovement(prevState => ({
                    current: 32,
                    previous: prevState.current
                }));
                setPosition({
                    ...position,
                    left: position.left <= 0 ? position.left : position.left - 32
                });
                break;

            case 'KeyD':
            case 'ArrowRight':
                setMovement(prevState => ({
                    current: 64,
                    previous: prevState.current
                }));
                setPosition({
                    ...position,
                    left: position.left >= 736 ? position.left : position.left + 32
                });
                break;

            case 'KeyW':
            case 'ArrowUp':
                setMovement(prevState => ({
                    current: 96,
                    previous: prevState.current
                }));
                setPosition({
                    ...position,
                    top: position.top <= 0 ? position.top : position.top - 32
                });
                break;
            
            default:
                return;
        };
    });

    useEffect(() => {
        if (movement.current === movement.previous) {
            setStep(step >= 2 ? 0 : step + 1);
        } else {
            setStep(0);
        };
    }, [movement]);

    return (
        <CharacterContainer position={position} movement={movement} step={step}>
            {/* <img src={character} /> */}
        </CharacterContainer>
    );
};

export default Character;