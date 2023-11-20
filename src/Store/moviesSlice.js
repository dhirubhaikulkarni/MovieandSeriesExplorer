import { createSlice } from '@reduxjs/toolkit';
import Movies from '../../src/ViewTip.json'


const initialState = {
  data: [],
  totalCount: 0,
  searchText: '',
  filterFlag: false

};

const contactSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setContactList: (state, action) => {
      state.data = action.payload;
      state.totalCount = action.payload.length
    },
    setSearchText: (state, action) => {
      if (action.payload !== "") {
        const searchText = action.payload;
        state.searchText = searchText;
        // Create a case-insensitive regular expression from the search text
        const regex = new RegExp(searchText, 'i');
        // Filter the state.data based on the regular expression
        state.data = Movies.filter(x => regex.test(x.MovieName));
      }
      else {
        state.data = Movies;
      }
    },
    setFiltersData: (state, action) => {
      
      if (action.payload == "all") {
        state.data = Movies;
      }
      else {
        state.data = Movies.filter(x => x.category == action.payload);
      }
    },
  }
});

export const {
  setContactList,
  setSearchText,
  setFiltersData
} = contactSlice.actions;

export default contactSlice.reducer;

// Additional actions (thunks)
export const getData = () => async (dispatch) => {
  
  try {
    dispatch(setContactList(Movies));
  } catch (error) {
    console.error(error.message);
  }
};

export const setSearchData = (text) => async (dispatch) => {
  
  try {
    dispatch(setSearchText(text));
  } catch (error) {
    console.error(error.message);
  }
};

export const setFilterData = (text) => async (dispatch) => {
  
  try {
    dispatch(setFiltersData(text));
  } catch (error) {
    console.error(error.message);
  }
};
