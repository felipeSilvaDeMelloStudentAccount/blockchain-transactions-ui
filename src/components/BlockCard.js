import React from 'react';
import { Card } from 'react-bootstrap';

const BlockCard = ({ block }) => (
    <Card className="mb-4 shadow-sm">
        <Card.Body>
            <Card.Title className="mb-3">Block Information</Card.Title>
            <Card.Text><strong>Hash:</strong> {block.hash}</Card.Text>
            <Card.Text><strong>Previous Hash:</strong> {block.previousHash}</Card.Text>
            <Card.Text><strong>Nonce:</strong> {block.nonce}</Card.Text>
            <Card.Text><strong>Difficulty:</strong> {block.difficulty}</Card.Text>
            <Card.Text><strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}</Card.Text>
        </Card.Body>
    </Card>
);

export default BlockCard;
