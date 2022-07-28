import React from 'react';
import Table from '../Body/Table';
import CountCard from '../CountSection/CountCard';
import DashNav from '../Nav/DashNav';
import './main.css';

function MainDashboard(props) {
    return (
        <div className='maain pb-5'>
            <CountCard />
            <Table/>

        </div>
    );
}

export default MainDashboard;