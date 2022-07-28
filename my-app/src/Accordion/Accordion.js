import React, { useState } from 'react';
import './accordion.css';

function Accordion(props) {
    const [active, setActive] = useState(true)
    function click() {
        setActive(!active)
    }
    return (
        <div className='pt-5 pb-5 Ac'>
            <div className='header' onClick={click}>
                <div>
                    <p>Section 1</p>
                </div>
                <div>
                    <p>{active ? "+" : "-"}</p>
                </div>
            </div>
            <div>
               { !active && <p className='content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.</p>}
            </div>
        </div>
    );
}

export default Accordion;