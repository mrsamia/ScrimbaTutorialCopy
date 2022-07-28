import React, { useState } from 'react';

function Hook_One(props) {
    const [value,setValue]=useState("Rony")

    function Click(){
        setValue("SAMIA")
    }

    return (
        <div className='pt-5 pb-5'>
            <h6>{value}</h6>
            <button className='btn btn-primary' onClick={Click}>Change Name</button>
        </div>
    );
}

export default Hook_One;