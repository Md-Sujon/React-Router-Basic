import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friend, setFriend] = useState([]); 

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result=>setFriend(result))
  },[])

    return (
        <div>
             <h2>User: {friend.length}</h2>
         {
           friend.map(friend =><Friend friend={friend}></Friend>)
         }
        </div>
    );
};

export default Home;