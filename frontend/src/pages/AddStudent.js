import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import StudentForm from '../components/StudentForm';

const AddStudent = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: currentYear,
    isActive: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', formData);
      toast.success('Student added successfully');
      navigate('/students');
    } catch (error) {
      console.error('Error adding student:', error);
      if (error.response && error.response.data) {
        toast.error(`Failed to add student: ${error.response.data.message}`);
      } else {
        toast.error('Failed to add student');
      }
    }
  };

  return (
    <div>
      <StudentForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formTitle="Add New Student"
      />
    </div>
  );
};

export default AddStudent;