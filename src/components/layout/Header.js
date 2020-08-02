import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headStyle}>
            <h1>TodoList</h1>
            <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link>
        </header>
    )
}

const headStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const LinkStyle = {
    color: 'white',
    textDecoration: 'none'
}
