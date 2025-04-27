import axios from 'axios';

// Log environment variable to confirm it's loaded
console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'https://assign2-128wt.onrender.com', 
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
