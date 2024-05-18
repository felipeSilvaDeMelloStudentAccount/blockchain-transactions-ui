import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction, blockHash }) => (
    <Card className="mb-3 shadow-sm">
        <Card.Body>
            <Card.Title>Transaction ID: {transaction.transactionId}</Card.Title>
            <h5>Inputs</h5>
            <ul>
                {transaction.inputs.map((input, index) => (
                    <li key={index}>
                        <strong>Source Transaction ID:</strong> {input.sourceTransactionId}<br/>
                        <strong>Output Index:</strong> {input.outputIndex}<br/>
                        <strong>Input Script:</strong> {input.scriptSig}
                    </li>
                ))}
            </ul>
            <h5>Outputs</h5>
            <ul>
                {transaction.outputs.map((output, index) => (
                    <li key={index}>
                        <strong>Value:</strong> {output.value} BTC<br/>
                        <strong>Output Script:</strong> {output.scriptPubKey}
                    </li>
                ))}
            </ul>
            <Button as={Link} to={`/block/${blockHash}/transaction/${transaction.transactionId}`} className="mt-3">
                View Transaction Details
            </Button>
        </Card.Body>
    </Card>
);

export default Transaction;
