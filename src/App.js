import React from 'react';
import './app.scss';

// Components
import Navbar from './components/navbar/Navbar.js';
import Content from './pages/content/Content';

const App = () => {
    return (
        <>
            <Navbar />
            <Content />
        </>
    );
};

export default App;
