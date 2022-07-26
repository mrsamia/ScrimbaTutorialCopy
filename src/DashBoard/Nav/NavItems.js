import React from 'react';
function NavItems(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-6 width'>
                 <p>{props.icon}</p>
                </div>
                <div className='col-6'>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default NavItems;