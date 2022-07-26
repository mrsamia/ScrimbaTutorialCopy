import React from 'react';

function TableItems(props) {
    return (
            <div class="container ">
                <div className='row'>
                    <div className='col-6'>
                    <table class="table  wrapper">
                    <tbody>
                        <tr>
                            <td>{props.name}</td>
                            <td>{props.commit}</td>
                            <td>{props.date}</td>
                            <td>{props.icon}</td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                    <div className='col-6'>

                    </div>
                </div>              
            </div>
     
    );
}

export default TableItems;