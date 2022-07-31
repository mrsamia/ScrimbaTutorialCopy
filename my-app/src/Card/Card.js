import React from 'react';
import Data from './Data';
import CardItems from './CardItems';
import './card.css';

function Card(props) {
    return(
        <div className='container'>
            <div className='row'>
                {
                    Data.map((e)=>{
                        return(
                            <div className='col-sm-12 col-md-6 col-lg-4'>
                            <CardItems
                                name={e.name}
                                phone={e.phone}
                                email={e.email}
                            />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Card;