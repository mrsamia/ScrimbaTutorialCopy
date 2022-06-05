import React from 'react';


function CardItems(props) {
    return (
        <div className='pt-5 pb-5'>
            <div className='card'>
                <div>
                    <h6 className='title'>{props.title}</h6>
                </div>
                <div>
                    <p className='body'>{props.body}</p>
                </div>
                <div className='row'>
                    {props.actions.map((item) => {
                        return (
                            <div className='col-6'>
                                <button className='btn btn-primary action_btn'>{item.name}</button>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}

export default CardItems;