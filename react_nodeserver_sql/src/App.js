import React from 'react';

import AppNavbar from './components/navbar';
import HomePage from './components/homepage';
import UserList from './components/userList';
import UserForm from './components/userForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AppNavbar />
      <HomePage />
      <div className="container mt-5">
        <UserList />
        <hr />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
