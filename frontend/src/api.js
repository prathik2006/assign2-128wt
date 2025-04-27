import axios from 'axios';

// For Create React App environment variables
const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://assign2-128wt.onrender.com';

console.log('Backend URL being used:', backendUrl);

// Create axios instance with additional configuration
const API = axios.create({
  baseURL: backendUrl,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for debugging
API.interceptors.request.use(request => {
  console.log('Request:', request.method, request.url);
  return request;
});

// Add response interceptor for debugging
API.interceptors.response.use(
  response => {
    console.log('Response status:', response.status);
    return response;
  },
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

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