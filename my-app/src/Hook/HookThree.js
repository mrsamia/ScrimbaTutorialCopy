import React, { useState } from 'react';

function HookThree(props) {

    //Message Button {Way One}
    const [value, setValue] = useState({
        btnName: "Message",
    })

    function click() {
        if (value.btnName === "Message") {
            setValue({ btnName: "Sent" })
        }
        else if (value.btnName === "Sent") {
            setValue({ btnName: "Message" })
        }
        
    }

    //Add Friend Button {Same things another way- way Two}
    const [Name, setName] = useState({
        isButton: true 
    })
    function clickHandler() {
        setName({ isButton: !Name.isButton })
    }

    return (
        <div className=' row pt-5 pb-5'>
            <div className='col-6'>
                <button className='btn btn-danger' onClick={click}>{value.btnName}</button>
            </div>
            <div className='col-6'>
                <button className={Name.isButton?'btn btn-danger':"btn btn-primary"} onClick={clickHandler}>{Name.isButton ? "Add Friend" : "Sent Request"}</button>
            </div>
        </div>
    );
}

export default HookThree;