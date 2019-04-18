import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config';
import {Route} from 'react-router-dom';

import Search from '../search';
import Customer from '../customer';
import Loading from '../loading';
import Status from '../status';

const Dashboard = props => {
    let token = localStorage.getItem("swwsToken");
    if (!token) {
        props.history.push("/dashboard/login");
    }

    const [customersList, setCustomersList] = useState(null);

    const [customer, setCustomer] = useState(null);

    const [currentView, setCurrentView] = useState('loading')

    let view = (
        <Loading />
    );

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const customers = await axios.get(`${API_BASE_URL}/api/customers`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("swwsToken")
                ),
            },
        })
        .catch(error => {
            console.log('no connection')
        })
        setCustomersList(customers.data)
        setCurrentView('search');
    };

    const toggleView = (type, data) => {
        if(type === 'customer') {
            setCustomer(data)
            setCurrentView('customer');
        }
        if(type === 'search') {
            setCustomer(null)
            setCurrentView('search');
        }
    }

    if(currentView === 'search') {
        view = (
            <Search customers={customersList} toggleView={(type, data) => toggleView(type, data)} />
        )
    }
    if(currentView === 'customer') {
        view = (
            <Customer customer={customer} toggleView={(type, data) => toggleView(type, data)} />
        )
    }
    

    return (
        <Route render={({history}) => (
            <section className='dashboard'>
                <div className='dashboard-container'>
                    <Status />
                    {view}
                </div>
            </section>
        )}/>
    );
};

export default Dashboard;