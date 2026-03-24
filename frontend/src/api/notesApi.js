import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/notes`;

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  };
};

export const getNotes = () => axios.get(API, getAuthConfig());

export const createNote = (data) =>
  axios.post(API, data, getAuthConfig());

export const getNoteById = (id) =>
  axios.get(`${API}/${id}`, getAuthConfig());

export const updateNote = (id, data) =>
  axios.put(`${API}/${id}`, data, getAuthConfig());

export const deleteNote = (id) =>
  axios.delete(`${API}/${id}`, getAuthConfig());