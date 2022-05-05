import React from 'react';
import './preview.scss';

const Preview = () => {
    return (
        <div className='preview'>
            <div className='preview__title-container'>
                <p className='preview__title'>Preview</p>
            </div>

            <div className='preview__container'></div>
        </div>
    );
};

export default Preview;
