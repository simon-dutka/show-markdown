import React from 'react';
import './preview.scss';

const Preview = ({ value }) => {
    return (
        <div className='preview'>
            <div className='preview__left'>
                <div className='preview__title-container'>
                    <p className='preview__title'>Preview</p>
                </div>
            </div>

            <div className='preview__right'>
                <div className='preview__title-container'>
                    <p className='preview__title'>HTML</p>
                </div>

                <textarea
                    className='preview__content-container'
                    type='text'
                    readOnly
                    defaultValue={value}
                ></textarea>
            </div>
        </div>
    );
};

export default Preview;
