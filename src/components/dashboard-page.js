import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

const Dashboard = props => {
    let token = localStorage.getItem("swwsToken");
    if (!token) {
        props.history.push("/dashboard/login");
    }

    return (
        <Route render={({history}) => (
            <section className='dashboard'>
                <div className='dashboard-container'>
                    <h1>Dashboard</h1>
                    <ul>
                        {/* <li>live earnings for the day</li> */}
                        <li>list of service calls for the day/week</li>
                        <li>search bar for all aspects of db by selection</li>
                    </ul>
                </div>
            </section>
        )}/>
    );
};

export default Dashboard;