import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBookWithId } from "../../utils/createBookWithId";
import { setError } from "./errorSlice";
import axios from "axios";

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    toggleFavorite: (state, action) => {
      return state.books.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
  extraReducers: {
    [fetchBook.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, "API"));
      }
    },

    [fetchBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export const selectBooks = (state) => state.books.books,
  selectIsLoading = (state) => state.books.isLoading;

export default bookSlice.reducer;
