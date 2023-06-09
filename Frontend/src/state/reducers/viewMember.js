import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const memberViewReducer = createReducer(initialState, {
  ViewMemberRequest: (state, action) => {
    state.loading = true;
  },
  ViewMemberSuccess: (state, action) => {
    state.loading = false;
    state.data = action.payload;
  },
  ViewMemberError: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state, action) => {
    state.error = null;
  },
});
