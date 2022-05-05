import React from 'react';
import './markdown.scss';

const markdown = () => {
    return (
        <div className='markdown'>
            <div className='markdown__title-container'>
                <p className='markdown__title'>Markdown</p>
            </div>

            <textarea className='markdown__textarea'></textarea>
        </div>
    );
};

export default markdown;
