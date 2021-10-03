import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function fetchContacts() {
  const { data } = await axios.get(`/items`);
  return data;
}

export function addContact(user) {
  return axios.post(`/items`, user);
}

export function deleteContact(id) {
  return axios.delete(`/items/` + id);
}
