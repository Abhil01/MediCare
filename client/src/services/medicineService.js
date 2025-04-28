import axios from 'axios';

 
const API = 'http://localhost:5000/api/medicines'; 


export const getMedicines = () => axios.get(`${API}`);



export const addMedicine = (data) => axios.post(`${API}`, data);
export const getMedicinesToday = () => axios.get(`${API}/today`);
export const markTaken = (id) => axios.put(`${API}/${id}/taken`);
