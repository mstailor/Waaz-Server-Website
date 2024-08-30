import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SteamPage from './SteamPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/steam" element={<SteamPage />} />
            </Routes>
        </Router>
    );
}

export default App;
