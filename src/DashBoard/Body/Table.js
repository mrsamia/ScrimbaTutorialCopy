import React from 'react';
import TableData from './TableData';
import TableItems from './TableItems';

function Table(props) {
    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-6'>
                    <table class="table  wrapper">
                        <thead>
                            <tr >
                                <th className='development'>Development Activity</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr  >
                                <th>USER</th>
                                <th >COMMIT</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            {
                TableData.map((e) => {
                    return (
                        <div>
                            <TableItems
                                name={e.name}
                                commit={e.commit}
                                date={e.date}
                                icon={e.icon}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Table;