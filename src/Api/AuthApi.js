import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/users";

export async function fetchContacts() {
  const { data } = await axios.get(`/signup`);
  return data;
}

export function addUser(user) {
  return axios.post(`/signup`, user);
}

export function deleteContact(id) {
  return axios.delete(`/items/` + id);
}
