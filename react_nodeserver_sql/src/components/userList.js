import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    axios.get('http://localhost:3100/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  

  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>

  
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
