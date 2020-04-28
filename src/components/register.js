import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
    height: 90vh;
    width: 393.3px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin-bottom: 32px;
        font-family: 'Press Start 2P', cursive;
        font-size: 1.75rem;
        color: #fff9fb;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 8px;
            font-size: 0.75rem;
            font-weight: normal;
            color: #fff9fb;
        }

        input {
            padding: 10px;
            margin-bottom: 16px;
            background-color: #fff9fb;
            border: none;
            font-family: 'Press Start 2P', cursive;
            font-size: 0.75rem;
            font-weight: normal;
            color: #252627;
            text-transform: uppercase;

            ::placeholder {
                color: #d3d4d9;
            }
        }

        .error {
            font-size: 0.625rem;
            color: #bb0a21;
        }

        button {
            padding: 10px;
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

        .log-in {
            font-size: 0.625rem;
            color: #fff9fb;
            cursor: pointer;
        }
    }
`;

const Register = props => {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const onChange = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        // input isn't actually uppercase, only appears that way
    };

    const onSubmit = event => {
        event.preventDefault();
        if (input.username === '' || input.password === '') {
            setError('FIELDS CANNOT BE LEFT BLANK');
        } else {
            // axios call here, if error, set error to username taken
        };
    };

    return (
        <RegisterContainer>
            <h1>REGISTER</h1>
            <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                <label htmlFor='username'>USERNAME</label>
                <input name='username' type='text' placeholder='ENTER A USERNAME' value={input.username} onChange={onChange} />
                
                <label htmlFor='password'>PASSWORD</label>
                <input name='password' type='password' placeholder='ENTER A PASSWORD' value={input.password} onChange={onChange} />

                <p className='error'>{error}</p>
            
                <button type='submit' onClick={() => props.history.push('/tutorial')}>SUBMIT</button>

                <p className='log-in' onClick={() => props.history.push('/login')}>ALREADY HAVE AN ACCOUNT? LOG IN HERE.</p>
            </form>
        </RegisterContainer>
    );
};

export default Register;