import { createSlice } from '@reduxjs/toolkit';

  const slice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
      ActiveDarkMode: {
        reducer: (state) => !state,
      }
    },
  });
  
  export const { ActiveDarkMode } = slice.actions;
  export default slice.reducer;