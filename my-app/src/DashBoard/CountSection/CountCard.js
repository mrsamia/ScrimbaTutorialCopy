import React from 'react';
import CardItems from "./CardItems";
import CardData from './CardData';
import './caard.css';

function CountCard(props) {
  return (
    <div className='container pt-5'>
      <div className='d-flex justify-content-start pt-4 pb-4'>
        <h5>Dashboard</h5>
      </div>
      <div className='row '>
        {
          CardData.map((e) => {
            return (
              <div className='col-2'>
                <CardItems
                  percent={e.percent}
                  number={e.number}
                  name={e.name}
                  isPercent={e.isPercent}
                />

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CountCard;