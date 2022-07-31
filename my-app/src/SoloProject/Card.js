import React from 'react';
import './File.css';

function Card(props) {
    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-sm-12 col-lg-5'>
                    <img src={props.imgUrl} className="img_size" />
                </div>
                <div className='col-sm-12 col-lg-7 d-flex align-items-center'>
                    <div>
                        <div className='row'>
                            <div className='col-6 d-flex justify-content-start'>
                                <p>{props.location}</p>
                            </div>
                            <div className='col-6 d-flex justify-content-start '>
                                <p>{props.googleMapUrl}</p>
                            </div>
                        </div>
                        <div>
                            <div className='d-flex justify-content-start'>
                                <h4>{props.imgName}</h4>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <p>{props.date}</p>
                            </div>
                            <div className='d-flex justify-content-start txt'>
                                <p >{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;