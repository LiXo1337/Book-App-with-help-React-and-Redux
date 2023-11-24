import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },

    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFilter,
} = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title,
  selectAuthorFilter = (state) => state.filter.author,
  selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
