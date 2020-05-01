import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

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

            ::placeholder {
                color: #d3d4d9;
            }
        }

        .error {
            font-size: 0.625rem;
            color: #bb0a21;
            line-height: 1rem;
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

        .log-in {
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

const Register = props => {
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
        // input isn't actually uppercase, only appears that way
    };

    const onSubmit = event => {
        event.preventDefault();
        if (input.username === '' || input.password === '') {
            setError('FIELDS CANNOT BE LEFT BLANK');
        } else if (input.username.length < 5) {
            setError('USERNAME MUST BE 5 CHARACTERS OR GREATER');
        } else if (input.password.length < 8) {
            setError('PASSWORD MUST BE 8 CHARACTERS OR GREATER');
        } else {
            setButtonText('LOADING...')
            // axios call here, if error, set error to username taken
            axios.post('https://loothunters3.herokuapp.com/api/registration/', {
                username: input.username,
                email: `${input.username}@${input.username}.com`,
                password1: input.password,
                password2: input.password
            })
                .then(response => {
                    localStorage.setItem('token', response.data.key);
                    props.history.push('/select');
                })
                .catch(error => {
                    console.log(error.response);
                    setError('USERNAME TAKEN');
                    setButtonText('SUBMIT')
                });
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
            
                <button type='submit'>{buttonText}</button>

                <p className='log-in' onClick={() => props.history.push('/login')}>ALREADY HAVE AN ACCOUNT? LOG IN HERE.</p>
            </form>
        </RegisterContainer>
    );
};

export default Register;