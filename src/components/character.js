import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import styled from 'styled-components';
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

const Character = props => {
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
        const currentStep = props.currentRoom[position.top / 32][position.left / 32];

        switch (event.code) {
            case 'KeyS':
            case 'ArrowDown':
                // account for top left corner bug
                // object blockage
                // door to switch room

                // we want to be able to step everywhere BUT the objects
                // bottom row is an issue, consists of 5, 6, 7, 11

                const nextStepDown = props.currentRoom[(position.top / 32) + 1] && props.currentRoom[(position.top / 32) + 1][position.left / 32];

                setMovement({ current: 0, previous: movement.current });

                // check if backend added anymore tile values

                if (currentStep === 11 && nextStepDown === undefined) {
                    console.log('Go to the room down');
                } else if (nextStepDown < 13 && nextStepDown !== undefined) {
                    setPosition({
                        ...position,
                        top: position.top >= 480 ? position.top : position.top + 32
                    });
                };
                
                // change rooms

                // if (props.currentRoom[(position.top / 32) + 1][position.left / 32] === 11) {
                //     setPosition({
                //         ...position,
                //         top: 0
                //     });
                //     props.setCurrentRoom(props.room2);
                // };

                break;
                
            case 'KeyA':
            case 'ArrowLeft':
                const nextStepToTheLeft = props.currentRoom[position.top / 32][(position.left / 32) - 1];
            
                setMovement({ current: 32, previous: movement.current });
                if (currentStep === 12 && nextStepToTheLeft === undefined) {
                    console.log('Go to the room to the left');
                } else if (nextStepToTheLeft < 13 && nextStepToTheLeft !== undefined) {
                    setPosition({
                        ...position,
                        left: position.left <= 0 ? position.left : position.left - 32
                    });
                };
                break;

            case 'KeyD':
            case 'ArrowRight':
                const nextStepToTheRight = props.currentRoom[position.top / 32][(position.left / 32) + 1];

                setMovement({ current: 64, previous: movement.current });
                if (currentStep === 10 && nextStepToTheRight === undefined) {
                    console.log('Go to the room to the right');
                } else if (nextStepToTheRight < 13 && nextStepToTheRight !== undefined) {
                    setPosition({
                        ...position,
                        left: position.left >= 736 ? position.left : position.left + 32
                    });
                };
                break;

            case 'KeyW':
            case 'ArrowUp':
                const nextStepUp = props.currentRoom[(position.top / 32) - 1] && props.currentRoom[(position.top / 32) - 1][position.left / 32];

                setMovement({ current: 96, previous: movement.current });
                if (currentStep === 9 && nextStepUp === undefined) {
                    console.log('Go to the room up');
                } else if (nextStepUp < 13 && nextStepUp !== undefined) {
                    setPosition({
                        ...position,
                        top: position.top <= 0 ? position.top : position.top - 32
                    });
                };

                // change rooms

                // if (props.currentRoom[(position.top / 32) - 1][position.left / 32] === 0) {
                //     setPosition({
                //         ...position,
                //         top: position.top <= 0 ? position.top : position.top - 32
                //     });
                // };
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
        <CharacterContainer position={position} movement={movement} step={step}></CharacterContainer>
    );
};

export default Character;