import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import BlockGraph from '../components/BlockGraph';
import config from '../config';

const Home = () => {
    const [blocks, setBlocks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${config.baseURL}/blocks`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching blocks: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                setBlocks(data.content);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
    }

    if (error) {
        return <Alert variant="danger">Error: {error}</Alert>;
    }

    return (
        <Container>
            <h1 className="my-4">Bitcoin Blocks</h1>
            <Row className="my-4">
                <Col>
                    <h3 className="mb-4">Block Graph</h3>
                    <BlockGraph blocks={blocks} />
                </Col>
            </Row>
            <Row>
                {blocks.map(block => (
                    <Col key={block.hash} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Block Hash</Card.Title>
                                <Card.Text>{block.hash}</Card.Text>
                                <Link to={`/block/${block.hash}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
