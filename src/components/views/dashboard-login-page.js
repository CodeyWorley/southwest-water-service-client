import React, {useState} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { API_BASE_URL } from '../../config';

const DashboardLoginPage = props => {
    let token = localStorage.getItem('swwsToken');
    if (token) {
        props.history.push('/dashboard');
    }

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const loginUser = async history => {
        let data = {
            username,
            password
        };

        axios.post(`${API_BASE_URL}/api/auth/login`, data)
            .then( res => {
                const token = res.data.authToken;
                localStorage.setItem('swwsToken', token);
            })
            .then( () => history.push('/dashboard'))
            .catch( err => {
                if(err) {
                    setError('Invalid username or password')
                }
            })
    };

    return (
        <Route render={({history}) => (
            <section className='login'>
                <div className='login-container'>
                    <div className='form-container'>
                        <div className='login-header'>
                            <h2 className='form-header'>Login</h2>
                        </div>
                        <div className='error-msg'>{error}</div>
                        <form
                            className='form login-form'
                            noValidate
                            onSubmit={event => event.preventDefault()}>
                        
                                <label htmlFor='username'/>
                                <input
                                    className='input form-input'
                                    id='username'
                                    type='text'
                                    placeholder='Username'
                                    onChange={event => setUser(event.target.value)}
                                />
                            
                                <label htmlFor='password'/>
                                <input
                                    className='input form-input'
                                    id='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={event => setPassword(event.target.value)}
                                />
                            
                                <button
                                    onClick={() => loginUser(history)}
                                    type='submit'
                                    className='btn btn-login-submit'>
                                    Log In
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        )}/>
    );
};

export default DashboardLoginPage;