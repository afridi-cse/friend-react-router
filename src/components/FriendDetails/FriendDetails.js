import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const { name, email, phone, website } = friend;
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>email: {email}</p>
            <p>Website: {website}</p>
            <h3>Phone: {phone}</h3>
        </div>
    );
};

export default FriendDetails;