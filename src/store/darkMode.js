import { createSlice } from '@reduxjs/toolkit';

  const slice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
      ActiveDarkMode: {
        reducer: (state, action) => action.payload = !state,
        prepare(payload) {
          return {
            meta: {
              localStorage: {
                key: "darkMode",
                value: !payload
              }
            }
          }
        }
      }
    },
  });
  
  export const { ActiveDarkMode } = slice.actions;
  export default slice.reducer;