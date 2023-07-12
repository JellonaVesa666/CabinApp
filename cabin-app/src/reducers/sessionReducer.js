import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  language: "en",
}

export const session = createSlice({
  name: "session",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      //console.log(state);
      //console.log(action);
      state.language = action.payload
    },
  },
})

export const { changeLanguage } = session.actions;

export default session.reducer;