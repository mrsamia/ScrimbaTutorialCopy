import React from 'react';
import TestData from './TestData';

function HeroPart(props) {
    return (
        <div className='container pt-5'>
            <div>
                <h2>{TestData.hero.text}</h2>
            </div>
            <div>
                <p className='subtext'>{TestData.hero.subtext}</p>
            </div>

        </div>
    );
}

export default HeroPart;