import React from 'react';
import NavData from './NavData';
import NavItems from './NavItems';

function DashNav(props) {
    return (
        <div className='top_border pt-3 pb-2'>
        <div className='container'>
        <div className='row'>
            {
                NavData.map((e) => {
                    return(
                    <div className=' col-sm-12 col-md-6 col-lg-2 wiidth'>
                        <NavItems
                            icon={e.icon}
                            name={e.name}
                        />
                    </div>
                    )
                })
            }
        </div>
        </div>
        </div>
    )
}

export default DashNav;