import React from 'react';

const NoMatch = () => {
    const notStyle={
        textAlign: 'center',
        fontSize:'50px',
        fontWeight:'bold'
    };
    return (
        <div style={notStyle}>
            <h1>404</h1>
            <h1>not found</h1>
        </div>
    );
};

export default NoMatch;