import React, { useState, useEffect } from 'react';
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
            transition: 0.25s;

            :hover {
                opacity: 0.75;
            }
        }

        .register {
            font-size: 0.625rem;
            color: #fff9fb;
            cursor: pointer;
            transition: 0.25s;

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
    const [buttonText, setButtonText] = useState('SUBMIT');

    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.history.push('/select');
        };
    }, []);

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
            setButtonText('LOADING...')
            // axios call here, if error, set error to invalid credentials
            axios.post('https://loothunters3.herokuapp.com/api/login/', {
                username: input.username,
                email: `${input.username}@${input.username}.com`,
                password: input.password,
            })
                .then(response => {
                    localStorage.setItem('token', response.data.key);
                    props.history.push('/select');
                })
                .catch(error => {
                    console.log(error);
                    setError('INVALID CREDENTIALS');
                    setButtonText('SUBMIT')
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
            
                <button type='submit'>{buttonText}</button>

                <p className='register' onClick={() => props.history.push('/register')}>DON'T HAVE AN ACCOUNT? REGISTER HERE.</p>
            </form>
        </LogInContainer>
    );
};

export default LogIn;