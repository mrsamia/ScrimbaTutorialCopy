import React, { useState } from 'react';
import './card.css';

function CardTwo(props) {
    const [value, setValue] = useState({
        name: "Samia Rahman",
        phone: "+1 (719) 555-1212",
        email: "itsmyreyfalname@examaple.com",
        isStar: true,
        isButton: true
    })
    function click() {
        setValue({ ...value, isStar: !value.isStar })
    }
    function click_btn() {
        setValue({ ...value, isButton: !value.isButton })
    }
    return (
        <div className='container d-flex justify-content-center pt-5 pb-5'>
            <div className='card'>
                <div>
                    <img className='catOne' src={require('./image/catOne.webp')} alt='img' />
                </div>
                <div>
                    <div >
                        <img className='Empty_Star' onClick={click} src={require(value.isStar ? './image/Empty_Star.png' : './image/full_star.png')} />
                    </div>
                    <div className='pt-3'>
                        <h6>{value.name}</h6>
                        <p>{value.phone}</p>
                        <p>{value.email}</p>
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={click_btn}>{value.isButton ? "Message" : "Sent"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardTwo;