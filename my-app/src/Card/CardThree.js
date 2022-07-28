import React, { useState } from 'react';

function CardThree(props) {
    const [value, setValue] = useState({
        name: "Samia Rahman",
        phone: "01706025403",
        email: "15203060@iubat.edu",
        isButton: true,
        isStar: true
    })
    function clickStar() {
        setValue({ ...value, isStar: !value.isStar })
    }
    function btn_click() {
        setValue({ ...value, isButton: !value.isButton })
    }
    return (
        <div className='container'>
            <div className='card'>
                <div>
                    <img className='catOne' src={require('./image/catOne.webp')} />
                </div>
                <div>
                    <div>
                        <img className='Empty_Star' onClick={clickStar} src={require(value.isStar ? './image/Empty_Star.png' : "./image/full_star.png")} />
                    </div>
                    <div>
                        <h6>{value.name}</h6>
                        <p>{value.phone}</p>
                        <p>{value.email}</p>
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={btn_click}>{value.isButton ? "message" : "Sent"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardThree;