import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    console.log(props);
    const {name, email,id} = props.friend;
    const history =useHistory();

    const handleClick = (friendId) => {
        const url = `/friend/${id}`;
        history.push(url)
    }

    const friendStyle = {
        border: '3px solid gray',
        borderRadius:'10px',
        margin: '20px',
        padding: '10px'
      }

    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            {/* Option- 01 */}
            <Link to={`/friend/${id}`}>show Details Option-01</Link>
            <br/>
            {/* Option- 02 */}
            <button onClick={() => handleClick(id)}>Show Details Option-02</button>
        </div>
    );
};

export default Friend;