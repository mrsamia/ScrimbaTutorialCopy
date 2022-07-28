import React from 'react';
import CardItems from './CardItems';
import TestData from './TestData';
import './testCard.css';



function CardTest(props) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    TestData.cards.map((e) => {
                        return (
                            <div className='col-4'>
                                <CardItems
                                    title={e.title}
                                    body={e.body}
                                    actions={e.actions}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CardTest;