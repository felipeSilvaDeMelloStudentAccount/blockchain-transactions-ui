import React, { useEffect, useState } from 'react';

const TransactionDetails = ({ blockHash }) => {
    const [transactions, setTransactions] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9001/api/bitcoin/blocks/${blockHash}/transactions`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching transactions: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setTransactions(data))
            .catch(error => setError(error.message));
    }, [blockHash]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!transactions) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Transactions for Block: {blockHash}</h2>
            {transactions.map(transaction => (
                <div key={transaction.transactionId}>
                    <h3>Transaction ID: {transaction.transactionId}</h3>
                    <h4>Inputs:</h4>
                    <ul>
                        {transaction.inputs.map((input, index) => (
                            <li key={index}>
                                Source Transaction ID: {input.sourceTransactionId}<br/>
                                Output Index: {input.outputIndex}<br/>
                                ScriptSig: {input.scriptSig}
                            </li>
                        ))}
                    </ul>
                    <h4>Outputs:</h4>
                    <ul>
                        {transaction.outputs.map((output, index) => (
                            <li key={index}>
                                Value: {output.value}<br/>
                                ScriptPubKey: {output.scriptPubKey}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TransactionDetails;
