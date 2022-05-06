import React, { useState } from 'react';
import './content.scss';

import Markdown from '../markdown/Markdown.js';
import Preview from '../preview/Preview';

const Content = () => {
    const [html, setHtml] = useState('');

    const parseRules = [
        // Headings
        /#{6}\s(.*$)/gm,
        /#{5}\s(.*$)/gm,
        /#{4}\s(.*$)/gm,
        /#{3}\s(.*$)/gm,
        /#{2}\s(.*$)/gm,
        /#{1}\s(.*$)/gm,
    ];

    //convert markdown to html
    const parse = (markdown) => {
        const parseToHtml = markdown
            .replace(parseRules[0], '<h6>$1</h6>')
            .replace(parseRules[1], '<h5>$1</h5>')
            .replace(parseRules[2], '<h4>$1</h4>')
            .replace(parseRules[3], '<h3>$1</h3>')
            .replace(parseRules[4], '<h2>$1</h2>')
            .replace(parseRules[5], '<h1>$1</h1>');

        setHtml(parseToHtml.trim());
    };

    return (
        <section className='content'>
            <Markdown onChange={(value) => parse(value)} />
            <Preview value={html} />
        </section>
    );
};

export default Content;
