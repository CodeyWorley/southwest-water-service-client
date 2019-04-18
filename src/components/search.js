import React, {useState} from 'react';

const Search = props => {
    // console.log(props.customers)
    const [queryResults, setQueryResults] = useState(null);

    const queryInput = event => {
        event.preventDefault();
        let query = props.customers.filter(customer => {
            //specify search here
            return customer.firstName.toUpperCase().includes(event.target.value.toUpperCase())
        });
        setQueryResults(query)
    }

    const onSubmit = event => {
        event.preventDefault();
    }

    let queryList;
    if(queryResults) {
        queryList = queryResults.map(customer => {
            let customerData = customer;
            return (
                <li className='customer-list-item'>
                    <div>{customer.firstName}</div>
                    <div>{customer.lastName}</div>
                    <button onClick={() => props.toggleView('customer', customerData)}>
                        {customer.id}
                    </button>
                </li>
            )
        })
    }

    return (
        <div className='search-container'>
            <form onSubmit={onSubmit}>
                <input
                    className='search-input-field'
                    type='text'
                    placeholder='Search'
                    onChange={queryInput}
                />
                <ul className='customer-list'>
                    {/* <li className='customer-list-item'>
                        <div>First</div>
                        <div>Last</div>
                        <div>ID</div>
                    </li> */}
                    {queryList}
                </ul>
            </form>
        </div>
    );
};

export default Search;