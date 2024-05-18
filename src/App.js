import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlockDetails from './pages/BlockDetails';
import TransactionDetails from './pages/TransactionDetails';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/block/:hash" element={<BlockDetails />} />
            <Route path="/block/:blockHash/transaction/:transactionId" element={<TransactionDetails />} />
        </Routes>
    </Router>
);

export default App;
