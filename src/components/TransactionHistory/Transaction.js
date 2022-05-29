import React from "react";
import propTypes from 'prop-types';


const Transaction = ({type,amount,currency}) => {
    return (
        
            <tr >
                <td>{type}</td>
                <td>{ amount}</td>
                <td>{ currency}</td>
            </tr>
        
    );
}

Transaction.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
}

export default Transaction;