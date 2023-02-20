import { createSlice } from '@reduxjs/toolkit';

  const slice = createSlice({
    name: 'darkMode',
    initialState: true,
    reducers: {
      ActiveDarkMode: {
        reducer: (state) => !state,
      }
    },
  });
  
  export const { ActiveDarkMode } = slice.actions;
  export default slice.reducer;