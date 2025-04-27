import axios from 'axios';

// For Create React App environment variables (REACT_APP_ prefix)
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://assign2-128wt.onrender.com';

console.log('Backend URL:', backendUrl);

const API = axios.create({
  baseURL: backendUrl,
});

export const fetchStudents = async () => {
  try {
    const response = await API.get('/api/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const createStudent = async (newStudent) => {
  try {
    const response = await API.post('/api/students', newStudent);
    return response.data;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await API.delete(`/api/students/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};
