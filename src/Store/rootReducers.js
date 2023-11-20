// store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './moviesSlice'; // Adjust the path

const store = configureStore({
  reducer: {
    movie: contactReducer,
    // Add other reducers if you have them
  },
});

export default store;
