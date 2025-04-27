import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchStudents, deleteStudent } from '../api'; // Adjust the import path if necessary

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudentsList();
  }, []);

  const fetchStudentsList = async () => {
    try {
      const response = await fetchStudents();  // Call the API to get students
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
        await deleteStudent(id);  // Call the API to delete the student
        toast.success('Student deleted successfully');
        fetchStudentsList(); // Refresh the list
      } catch (error) {
        console.error('Error deleting student:', error);
        toast.error('Failed to delete student');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student) => (
        <div key={student._id}>
          <span>{student.name}</span>
          <button onClick={() => handleDelete(student._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
