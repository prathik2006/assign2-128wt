import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Student Management System</h1>
      <p className="lead">
        A comprehensive solution for managing student records and academic information
      </p>
      <hr className="my-4" />
      <p>
        Easily add, view, edit, and delete student records with our intuitive interface
      </p>
      <div className="d-flex gap-3 justify-content-center mt-4">
        <Link to="/students" className="btn btn-primary">
          <i className="fas fa-users me-2"></i>
          View Students
        </Link>
        <Link to="/students/add" className="btn btn-success">
          <i className="fas fa-user-plus me-2"></i>
          Add New Student
        </Link>
      </div>
    </div>
  );
};

export default Home;