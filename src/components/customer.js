import React from 'react';

const Customer = props => {

    return (
        <div className='customer-container'>
            <button onClick={() => props.toggleView('search')}>back</button>
            <div className='customer-info'>
                {props.customer.firstName}
                {props.customer.lastName}
                {props.customer.id}
            </div>
        </div>
    );
};

export default Customer;