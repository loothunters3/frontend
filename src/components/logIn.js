import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LogInContainer = styled.div`
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

            :hover {
                opacity: 0.75;
            }
        }

        .register {
            font-size: 0.625rem;
            color: #fff9fb;
            cursor: pointer;

            :hover {
                opacity: 0.75;
            }
        }
    }
`;

const LogIn = props => {
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
    };

    const onSubmit = event => {
        event.preventDefault();
        if (input.username === '' || input.password === '') {
            setError('FIELDS CANNOT BE LEFT BLANK');
        } else {
            // axios call here, if error, set error to invalid credentials
            axios.post('https://loothunters3.herokuapp.com/api/login/', input)
                .then(response => {
                    console.log(response);
                    // localStorage.setItem('token', response.data.token);
                    // props.history.push('/tutorial');
                })
                .catch(error => {
                    console.log(error);
                    setError('INVALID CREDENTIALS');
                });        
        };
    };

    return (
        <LogInContainer>
            <h1>LOG IN</h1>
            <form autoComplete='off' spellCheck='false' onSubmit={onSubmit}>
                <label htmlFor='username'>USERNAME</label>
                <input name='username' type='text' placeholder='ENTER YOUR USERNAME' value={input.username} onChange={onChange} />
                
                <label htmlFor='password'>PASSWORD</label>
                <input name='password' type='password' placeholder='ENTER YOUR PASSWORD' value={input.password} onChange={onChange} />

                <p className='error'>{error}</p>
            
                <button type='submit' onClick={() => props.history.push('/tutorial')}>SUBMIT</button>

                <p className='register' onClick={() => props.history.push('/register')}>DON'T HAVE AN ACCOUNT? REGISTER HERE.</p>
            </form>
        </LogInContainer>
    );
};

export default LogIn;