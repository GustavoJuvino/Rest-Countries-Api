import { createSlice } from '@reduxjs/toolkit';

  const slice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
      ActiveDarkMode: (state) => state = true,
    },
  });
  
  export const { ActiveDarkMode } = slice.actions;
  export default slice.reducer;