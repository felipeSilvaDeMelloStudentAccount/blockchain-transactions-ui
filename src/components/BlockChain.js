import React from 'react';
import { Button, Container } from 'react-bootstrap';
import CompactBlock from './CompactBlock';
import './BlockChain.css';

const BlockChain = ({ blocks, onPrevious, onNext }) => {
    return (
        <Container>
            <div className="blockchain-controls">
                <Button onClick={onPrevious} disabled={!onPrevious}>
                    Previous
                </Button>
                <Button onClick={onNext} disabled={!onNext}>
                    Next
                </Button>
            </div>
            <div className="blockchain-grid">
                {blocks.map(block => (
                    <CompactBlock key={block.hash} block={block} />
                ))}
            </div>
        </Container>
    );
};

export default BlockChain;
