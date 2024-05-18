import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, blockHash }) => (
    <div>
        {transactions.map(transaction => (
            <Transaction key={transaction.transactionId} transaction={transaction} blockHash={blockHash} />
        ))}
    </div>
);

export default TransactionList;
