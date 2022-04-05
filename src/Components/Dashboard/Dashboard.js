import React from 'react';
import MyBarChart from '../BarChart/MyBarChart';

import MyLineChart from '../MyLineChart/MyLineChart';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div >
            <div className='lineChart'>
                <h1>Monthly Sell</h1>
               <MyLineChart></MyLineChart>
            </div>
            <div className='barChart'>
                <h1>Investment vs Revenue</h1>
                <MyBarChart></MyBarChart>
            </div>
        </div>
    );
};

export default Dashboard;