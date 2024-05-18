import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Spinner, Alert, Row, Col } from 'react-bootstrap';
import BlockCard from '../components/BlockCard';
import Transaction from '../components/Transaction';
import BlockGraph from '../components/BlockGraph';
import config from '../config';

const BlockDetails = () => {
    const { hash } = useParams();
    const [block, setBlock] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlockData = async () => {
            try {
                const blockResponse = await axios.get(`${config.baseURL}/blocks/${hash}`);
                setBlock(blockResponse.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching block details: " + error.message);
                setLoading(false);
            }
        };

        fetchBlockData();
    }, [hash]);

    if (loading) {
        return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h2 className="mb-4">Block Details</h2>
                    {block && <BlockCard block={block} />}
                    <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <h3 className="mb-4">Block Graph</h3>
                    <BlockGraph blocks={[block]} />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <h3 className="mb-4">Transactions</h3>
                    {block && block.transactions.map(transaction => (
                        <Transaction key={transaction.transactionId} transaction={transaction} blockHash={hash} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default BlockDetails;
