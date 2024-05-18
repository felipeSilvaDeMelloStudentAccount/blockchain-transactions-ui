import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [blocks, setBlocks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9001/api/bitcoin/blocks')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching blocks: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => setBlocks(data.content)) // Adjusted to handle paginated response
            .catch(error => setError(error.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Bitcoin Blocks</h1>
            <ul>
                {blocks.map(block => (
                    <li key={block.hash}>
                        <Link to={`/block/${block.hash}`}>Block Hash: {block.hash}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
