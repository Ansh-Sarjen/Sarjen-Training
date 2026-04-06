import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ThemeToggle.css';

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark-theme');
            document.documentElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
                <div className="toggle-slider">
                    {isDarkMode ? '🌙' : '☀️'}
                </div>
            </div>
        </>
    );
};

export default Theme;
