export const getTricks = (state) => {
  const { filter, entities } = state.tricks;

  return filter === ""
    ? entities
    : entities.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
};

export const getAllTricks = (state) => state.tricks.entities;
