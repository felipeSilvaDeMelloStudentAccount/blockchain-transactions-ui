import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Blockchain Viewer</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
        </Nav>
    </Navbar>
);

export default AppNavbar;
