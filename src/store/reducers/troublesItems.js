import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'troublesItems',
  initialState: [],
  reducers: {
    setItems: (state, action) => {
      return action.payload;
    },
  }
});

export const { setItems } = slice.actions;
export default slice.reducer;