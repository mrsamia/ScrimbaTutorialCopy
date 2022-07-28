import React, { useState } from 'react';

function HookTwo(props) {
    const [value, setValue] = useState({
        name: "SAMIA",
        Age: "25"
    })
    function click() {
        setValue({
            name: "Rony",
            Age: "26"
        })
    }
    return (
        <div className='pt-5 pb-5'>
            <h6>Name: {value.name}</h6>
            <h6>Age: {value.Age}</h6>
            <button className='btn btn-primary' onClick={click}>Change Name</button>
        </div>
    );
}

export default HookTwo;