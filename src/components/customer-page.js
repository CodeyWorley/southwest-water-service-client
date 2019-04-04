import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

const CustomerPage = props => {
    let token = localStorage.getItem("swwsToken");
    if (!token) {
        props.history.push("/dashboard/login");
    }

    const [customer, setCustomer] = useState(null);
    const [addresses, setAdrresses] = useState(null);
    const [contracts, setContracts] = useState(null);
    const [services, setServices] = useState(null);

    useEffect(() => {
      fetchCustomerInfo();
    }, [customer, addresses, contracts, services])

    const fetchCustomerInfo = async (props) => {
      //use id prop to get all info
    }

    return (
        <Route render={({history}) => (
            <section className='customer'>
                <div className='customer-container'>
                    customer info here
                </div>
            </section>
        )}/>
    );
};

export default CustomerPage;