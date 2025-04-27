import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000', 
});

export const fetchStudents = () => API.get('/api/students');
export const createStudent = (newStudent) => API.post('/api/students', newStudent);
export const deleteStudent = (id) => API.delete(`/api/students/${id}`);
