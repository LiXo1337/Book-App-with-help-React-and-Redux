import { v4 as uuidv4 } from "uuid";

export const createBookWithId = (book, sourse) => {
  return {
    ...book,
    sourse,
    isFavorite: false,
    id: uuidv4(),
  };
};
