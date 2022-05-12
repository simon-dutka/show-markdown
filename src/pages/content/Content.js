import React, { useState } from 'react';
import './content.scss';

import Markdown from '../markdown/Markdown.js';
import Preview from '../preview/Preview';

const Content = () => {
    const [html, setHtml] = useState('');

    const parseRules = [
        // Italic
        /_(.*)_/gm,
        /\*(.*)\*/gm,

        // Bold
        /_{2}(.*)_{2}/gm,
        /\*{2}(.*)\*{2}/gm,

        // Headings
        /#{6}\s(.*$)/gm,
        /#{5}\s(.*$)/gm,
        /#{4}\s(.*$)/gm,
        /#{3}\s(.*$)/gm,
        /#{2}\s(.*$)/gm,
        /#{1}\s(.*$)/gm,
    ];

    // Convert markdown to html
    const parse = (markdown) => {
        const parseToHtml = markdown

            // Italic
            .replace(parseRules[0], '<em>$1</em>')
            .replace(parseRules[1], '<em>$1</em>')

            // Bold
            .replace(parseRules[2], '<b>$1</b>')
            .replace(parseRules[3], '<b>$1</b>')

            // Headings
            .replace(parseRules[4], '<h6>$1</h6>')
            .replace(parseRules[5], '<h5>$1</h5>')
            .replace(parseRules[6], '<h4>$1</h4>')
            .replace(parseRules[7], '<h3>$1</h3>')
            .replace(parseRules[8], '<h2>$1</h2>')
            .replace(parseRules[9], '<h1>$1</h1>');

        setHtml(parseToHtml.trim());
    };

    return (
        <section className='content'>
            <Markdown onChange={(value) => parse(value)} />
            <Preview preview={{ __html: html }} value={html} />
        </section>
    );
};

export default Content;
