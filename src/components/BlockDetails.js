import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';

const BlockDetails = () => {
    const { hash } = useParams();
    const [transactions, setTransactions] = useState([]);
    const [block, setBlock] = useState(null);

    useEffect(() => {
        // Fetch block details
        axios.get(`http://localhost:9001/api/bitcoin/blocks/${hash}`)
            .then(response => {
                setBlock(response.data);
            })
            .catch(error => {
                console.error("Error fetching block details:", error);
            });

        // Fetch transactions for the block
        axios.get(`http://localhost:9001/api/bitcoin/blocks/${hash}/transactions`)
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error("Error fetching transactions:", error);
            });
    }, [hash]);

    return (
        <Container>
            <h2>Block Details</h2>
            {block && (
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Block Information</Card.Title>
                        <Card.Text><strong>Hash:</strong> {block.hash}</Card.Text>
                        <Card.Text><strong>Previous Hash:</strong> {block.previousHash}</Card.Text>
                        <Card.Text><strong>Nonce:</strong> {block.nonce}</Card.Text>
                        <Card.Text><strong>Difficulty:</strong> {block.difficulty}</Card.Text>
                        <Card.Text><strong>Timestamp:</strong> {block.timestamp}</Card.Text>
                    </Card.Body>
                </Card>
            )}
            <h3>Transactions</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Inputs</th>
                    <th>Outputs</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(tx => (
                    <tr key={tx.transactionId}>
                        <td>{tx.transactionId}</td>
                        <td>
                            {tx.inputs.map(input => (
                                <div key={input.id}>
                                    <p><strong>Source Tx ID:</strong> {input.sourceTransactionId}</p>
                                    <p><strong>Output Index:</strong> {input.outputIndex}</p>
                                    <p><strong>Script Sig:</strong> {input.scriptSig}</p>
                                </div>
                            ))}
                        </td>
                        <td>
                            {tx.outputs.map(output => (
                                <div key={output.id}>
                                    <p><strong>Value:</strong> {output.value} BTC</p>
                                    <p><strong>Script Pub Key:</strong> {output.scriptPubKey}</p>
                                </div>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default BlockDetails;
