import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/notes`;

const BASE_URL = import.meta.env.VITE_API_URL;

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  };
};

export const loginUser = (email, password) =>
  axios.post(`${BASE_URL}/login`, {email, password});

export const signupUser = (name, email, password) =>
  axios.post(`${BASE_URL}/signup`, {name, email, password});

export const getNotes = () => axios.get(API, getAuthConfig());

export const createNote = (data) =>
  axios.post(API, data, getAuthConfig());

export const getNoteById = (id) =>
  axios.get(`${API}/${id}`, getAuthConfig());

export const updateNote = (id, data) =>
  axios.put(`${API}/${id}`, data, getAuthConfig());

export const deleteNote = (id) =>
  axios.delete(`${API}/${id}`, getAuthConfig());