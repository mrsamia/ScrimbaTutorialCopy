import React, { useState } from 'react';
import { MdExpandMore,MdExpandLess } from "react-icons/md";

function CardItems(props) {
    console.log(props)
    return (
        <div className='container'>
            <div className='caard'>
                <div className='pt-3'>
                    <p className="percent"  style={{ color: props.isPercent ? "green" : "red" }}>{props.percent}{props.isPercent?<MdExpandLess/>:<MdExpandMore/>}</p>
                    <h5>{props.number}</h5>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default CardItems;