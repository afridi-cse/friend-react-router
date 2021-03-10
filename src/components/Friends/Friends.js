import React from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';


const Friends = (props) => {
    const{name, email, id}=props.friends;
    return (
        <div className="friend-info">
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <h4>ID: {id}</h4>
            <Link to={`/friend/${id}`}><button>ABOUT</button></Link>
        </div>
    );
};

export default Friends;