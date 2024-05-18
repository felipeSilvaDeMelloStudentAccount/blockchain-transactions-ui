import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Spinner, Alert, Card } from 'react-bootstrap';
import config from '../config';

const TransactionDetails = () => {
    const { hash, transactionId } = useParams();
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactionData = async () => {
            try {
                const response = await axios.get(`${config.baseURL}/transactions/${transactionId}`);
                setTransaction(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching transaction details: " + error.message);
                setLoading(false);
            }
        };

        fetchTransactionData();
    }, [transactionId]);

    if (loading) {
        return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <Container>
            <h2 className="my-4">Transaction Details</h2>
            {transaction && (
                <Card className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Transaction ID: {transaction.transactionId}</Card.Title>
                        <h5>Inputs</h5>
                        <ul>
                            {transaction.inputs.map((input, index) => (
                                <li key={index}>
                                    <strong>Source Transaction ID:</strong> {input.sourceTransactionId}<br/>
                                    <strong>Output Index:</strong> {input.outputIndex}<br/>
                                    <strong>Input Script:</strong> {input.inputScript}
                                </li>
                            ))}
                        </ul>
                        <h5>Outputs</h5>
                        <ul>
                            {transaction.outputs.map((output, index) => (
                                <li key={index}>
                                    <strong>Value:</strong> {output.value} BTC<br/>
                                    <strong>Output Script:</strong> {output.outputScript}
                                </li>
                            ))}
                        </ul>
                        <Link to={`/block/${hash}`} className="btn btn-secondary mt-3">Back to Block Details</Link>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default TransactionDetails;
