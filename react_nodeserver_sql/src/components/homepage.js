import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <Container>
        <h1 className="display-4">Welcome to the User Management System</h1>
        <p className="lead">
          This is a simple user management system built with React, Node.js, Express, and Sequelize.
        </p>
      </Container>
    </div>
  );
};

export default HomePage;
