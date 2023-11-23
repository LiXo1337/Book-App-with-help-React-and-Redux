import { v4 as uuidv4 } from "uuid";

export const createBookWithId = (book) => {
  return {
    ...book,
    isFavorite: false,
    id: uuidv4(),
  };
};
