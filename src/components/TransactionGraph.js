import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TransactionGraph = ({ transactions }) => {
    const data = transactions.map((transaction, index) => ({
        index: index + 1,
        outputValue: transaction.outputs.reduce((acc, output) => acc + output.value, 0),
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="index" label={{ value: 'Transaction Index', position: 'insideBottomRight', offset: 0 }} />
                <YAxis label={{ value: 'Output Value', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="outputValue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default TransactionGraph;
