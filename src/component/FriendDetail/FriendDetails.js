import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {FriendId} = useParams();
    const [friends, setFriends] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${FriendId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setFriends(data));
    },[])
    return (
        <div> 
            <h4>{FriendId}</h4>
            <h1>Friend Details Component</h1>
            <h3>name: {friends.name}</h3>
            <p>Email: {friends.email}</p>
            <p>Phone: {friends.phone}</p>
            <p>Website: {friends.website}</p>
            {/* <p>Company: {friends.company.name}</p> */}
        </div>
    );
};

export default FriendDetails;