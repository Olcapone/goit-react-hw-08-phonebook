import axios from "axios";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export function addContact(user) {
  return axios.post(`/contacts`, user);
}

export function deleteContact(contactId) {
  return axios.delete(`/contacts/${contactId}`);
}
