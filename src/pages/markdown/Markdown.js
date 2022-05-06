import React from 'react';
import './markdown.scss';

const Markdown = (handleMarkdown) => {
    return (
        <>
            <div className='markdown'>
                <div className='markdown__title-container'>
                    <p className='markdown__title'>Markdown</p>
                </div>

                <textarea
                    className='markdown__textarea'
                    onChange={(e) => handleMarkdown.onChange(e.target.value)}
                ></textarea>
            </div>
        </>
    );
};

export default Markdown;
