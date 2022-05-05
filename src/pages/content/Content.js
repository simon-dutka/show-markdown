import React from 'react';
import './content.scss';

import Markdown from '../markdown/Markdown.js';
import Preview from '../preview/Preview';

const Content = () => {
    return (
        <section className='content'>
            <Markdown />
            <Preview />
        </section>
    );
};

export default Content;
