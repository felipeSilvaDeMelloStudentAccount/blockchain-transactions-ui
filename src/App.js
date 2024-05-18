import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlockDetails from './components/BlockDetails';
import TransactionDetails from './components/TransactionDetails';
import AppNavbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <AppNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/block/:hash" element={<BlockDetails />} />
                    <Route path="/block/:hash/transactions" element={<TransactionDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
