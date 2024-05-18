import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const BlockGraph = ({ blocks }) => {
    const data = blocks.map(block => ({
        date: format(new Date(block.timestamp), 'dd MMM yyyy'),
        totalValue: block.transactions.reduce((sum, transaction) => {
            return sum + transaction.outputs.reduce((outputSum, output) => outputSum + output.value, 0);
        }, 0)
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'BTC Value', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalValue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default BlockGraph;
