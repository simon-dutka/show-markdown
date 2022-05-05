import React from 'react';
import './content.scss';

import Markdown from '../markdown/Markdown.js';

const Content = () => {
    return (
        <section className='content'>
            <Markdown />
        </section>
    );
};

export default Content;
