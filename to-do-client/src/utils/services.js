import axios from 'axios';
const API_URL = 'http://localhost:4000/tasks';

export function createTask(task) {
  return axios.post(API_URL, task);
}

export  function listTasks() {
  return  axios.get(API_URL);
}

export function updateTask(id, task) {
  return axios.put(API_URL + "/" + id, task);
}

export function deleteTask(id) {
  return axios.delete(API_URL + "/" + id);
}
