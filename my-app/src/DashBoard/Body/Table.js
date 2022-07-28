import React from 'react';
import TableData from './TableData';
import TableItems from './TableItems';

function Table(props) {
    return (
        <div className='container pt-5'>
            <h5 className='development'>Development Activity</h5>
            <div className='row'>
                <div className='col-6'>
                    <table class="table  wrapper ">
                        <thead>
                            <tr>
                                <th>Development Activity</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>USER</th>
                                <th>COMMIT</th>
                                <th>DATE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                TableData.map((e) => {
                                    return (
                                        <TableItems
                                            name={e.name}
                                            commit={e.commit}
                                            date={e.date}
                                            icon={e.icon}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className='col-6'>
                    <div className='documentationWrapper'>
                        <p className='fixAlign'>Read our documentation with code samples</p>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='box'>
                                <p className='boxTitle'>Chart Title</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='box'>
                            <p className='boxTitle'>New Feedback</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Table;