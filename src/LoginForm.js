import React, { useState } from 'react';
import './style.css';
import './style2.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            alert('Both fields are required.');
        } else if ((username === '50463872' && password === '50463872') ||
            (username === '20356932' && password === '20356932')) {
            navigate('/steam');
        } else {
            alert('Incorrect username or password.');
        }
    };

    return (
        <div>
            <header>
                <h3>
                    <a href="https://mohammedimohallangp.in/pass-booking/logi">
                        Mohammadi Mohalla,&nbsp;&nbsp;Anjuman-E-Hakimi,&nbsp;&nbsp;Nagpur
                    </a>
                </h3>
            </header>
            <form className="login-form" onSubmit={handleSubmit}>
                <img src="/ITS_Logo_Golden.png" alt="ITS Image" style={{ width: '40%' }} /><br /><br />
                <label htmlFor="username">ITS</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ITS Number"
                    minLength="8"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ITS Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
