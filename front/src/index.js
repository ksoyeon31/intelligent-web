import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/app2" element={<App2 />} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
