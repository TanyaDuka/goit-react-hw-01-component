import React from "react";
import propTypes from 'prop-types';


const Transaction = ({id,type,amount,currency}) => {
    return (
        
            <tr key={id}>
                <td>{type}</td>
                <td>{ amount}</td>
                <td>{ currency}</td>
            </tr>
        
    );
}

Transaction.propTypes = {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
}

export default Transaction;