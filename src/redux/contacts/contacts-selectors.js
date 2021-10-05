export const getContacts = (state) => {
  const { filter, entities } = state.contacts;

  return filter === ""
    ? entities
    : entities.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
};

export const getAllContact = (state) => state.contacts.entities;
