import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { showCartUI: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialAuthState,
  reducers: {
    show(state) {
      state.showCartUI = !state.showCartUI;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;