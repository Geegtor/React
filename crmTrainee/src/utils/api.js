import axios from 'axios';
import { API_BASE_URL } from './constants';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QtYWNjb3VudC0xQGFuZGVyc2VubGFiLmNvbSIsInJvbGUiOiLQoNCe0KEt0LDQtNC80LjQvSIsIm5iZiI6MTY0MjA2MDQ3NCwiZXhwIjoxNjc0NDYwNDc0LCJpYXQiOjE2NDIwNjA0NzQsImlzcyI6Imh0dHA6Ly8xMC4xMC4xNS4yMDI6MTkyMTcvIiwiYXVkIjoiaHR0cDovLzEwLjEwLjE1LjIwMjo4MDgwLyJ9.qLHP_1QK5ELwWlEzER2UoPrwLsshxXtfIk8BZuG7XwM';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
});

export async function request(config = {}) {
  const response = await api.request(config);
  return response.data;
}

export default api;
