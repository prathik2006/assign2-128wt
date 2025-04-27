import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import StudentForm from '../components/StudentForm';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: 2000,
    isActive: true
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`/api/students/${id}`);
        const student = response.data;
        
        const formattedDob = student.dob ? new Date(student.dob).toISOString().split('T')[0] : '';
        
        setFormData({
          ...student,
          dob: formattedDob
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching student:', error);
        toast.error('Failed to fetch student data');
        navigate('/students');
      }
    };

    fetchStudent();
  }, [id, navigate]);

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
      await axios.put(`/api/students/${id}`, formData);
      toast.success('Student updated successfully');
      navigate('/students');
    } catch (error) {
      console.error('Error updating student:', error);
      if (error.response && error.response.data) {
        toast.error(`Failed to update student: ${error.response.data.message}`);
      } else {
        toast.error('Failed to update student');
      }
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  }

  return (
    <div>
      <StudentForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formTitle="Edit Student"
      />
    </div>
  );
};

export default EditStudent;