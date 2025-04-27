import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchStudents, deleteStudent } from './api';  // Import API functions

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await fetchStudents();
      setStudents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error('Failed to fetch students');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        toast.success('Student deleted successfully');
        loadStudents(); // Refresh the list
      } catch (error) {
        console.error('Error deleting student:', error);
        toast.error('Failed to delete student');
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border"></div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          <i className="fas fa-users me-2"></i>
          Student Directory
        </h4>
        <Link to="/students/add" className="btn btn-success">
          <i className="fas fa-plus-circle me-2"></i>
          Add Student
        </Link>
      </div>
      <div className="card-body">
        {students.length === 0 ? (
          <div className="text-center py-5">
            <i className="fas fa-user-slash fa-3x mb-3 text-muted"></i>
            <p className="lead">No students found in the system.</p>
            <Link to="/students/add" className="btn btn-primary mt-2">
              Add Your First Student
            </Link>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.studentId}</td>
                    <td>{student.firstName} {student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td>{student.enrollmentYear}</td>
                    <td>
                      <span className={`badge ${student.isActive ? 'badge-active' : 'badge-inactive'}`}>
                        {student.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Link to={`/students/edit/${student._id}`} className="btn btn-edit btn-sm">
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button onClick={() => handleDelete(student._id)} className="btn btn-delete btn-sm">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
