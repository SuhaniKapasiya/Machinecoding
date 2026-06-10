import axios from "axios";

const API = "http://localhost:5000";


export const  getTodos =()=> axios.get(`${API}/todos`);

export const createTodo = (data) => axios.post(`${API}/todos`,data);

export const deleteTodo = (id)=> axios.delete(`${API}/todos/${id}`);