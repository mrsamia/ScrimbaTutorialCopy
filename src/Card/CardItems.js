import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
function CardItems(props) {
    return (
        <div className='container d-flex justify-content-center'>
            <div className='card pb-4'>
                <div>
                    <img src={require('./image/catOne.webp')}/>
                </div>
                <div className='pt-4 pb-3 d-flex justify-content-center align-items-center'>
                    <FaUser/>
                    <h4 className='icon_p'>{props.name}</h4>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <FaPhoneAlt/>
                    <p className='icon_p'>{props.phone}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <FaEnvelope/>
                    <p className='icon_p'>{props.email}</p>
                </div>
            </div>
            
        </div>
    );
}

export default CardItems;