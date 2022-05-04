import React from 'react';
import './navbar.scss';

const navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <h1 className='navbar__title'>Show Markdown</h1>

                <a
                    className='navbar__link'
                    href='https://github.com/simon-dutka/show-markdown'
                >
                    github
                </a>
            </div>
        </nav>
    );
};

export default navbar;
