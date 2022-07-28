import React from 'react';

function Nav(props) {
    return (
        <div className='nav'>
            <div className='nav-item'>
                <img src={require('./logo.png')}/>
            </div>
            <div>
                <p className='nav_txt'>My travel journal.</p>
            </div>
        </div>
    );
}

export default Nav;