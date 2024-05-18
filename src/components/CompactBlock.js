import React from 'react';
import {Link} from 'react-router-dom';
import './CompactBlock.css'; // Import the styles

const CompactBlock = ({block}) => (
    <div className="compact-block">
        <div className="block-info">
            <span className="block-field"><strong>Hash:</strong> <span className="truncate"
                                                                       title={block.hash}>{block.hash}</span></span>
            <span className="block-field"><strong>Prev Hash:</strong> <span className="truncate"
                                                                            title={block.previousHash}>{block.previousHash}</span></span>
            <span className="block-field"><strong>Nonce:</strong> {block.nonce}</span>
            <span className="block-field"><strong>Difficulty:</strong> {block.difficulty}</span>
            <span
                className="block-field"><strong>Timestamp:</strong> {new Date(block.timestamp).toLocaleString()}</span>
        </div>
        <Link to={`/block/${block.hash}`} className="block-details-link">Details</Link>
    </div>
);

export default CompactBlock;
