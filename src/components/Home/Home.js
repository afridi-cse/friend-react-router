import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);
    console.log(friends)
    return (
        <div>
            {
                friends.map(fd => <Friends friends={fd} key={fd.id}></Friends>)
            }
        </div>
    );
};

export default Home;