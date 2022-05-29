import React from 'react';
import propTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import Transaction  from './Transaction';

const TransactionHistory = ({transactions }) => {
    return (
        <table className={s.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            
            <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
                <Transaction
                    id={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    transaction: {
        id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
}
    }

export default TransactionHistory;