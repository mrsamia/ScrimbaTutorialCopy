import React, { useState } from 'react';
import './HookFour.css';
function HookFour(props) {
    const [value, setValue] = useState(0)
    function add() {
        setValue(value + 1)
    }
    function minus() {
        setValue(value - 1)
    }

    return (
        <div className='pt-5 pb-5'>
            <div className='d-flex justify-content-center'>
                <h2 className='add' onClick={add}>+</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <h2 className='value'>{value}</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <h2 className='minus' onClick={minus}>-</h2>
            </div>
        </div>
    );
}

export default HookFour;