import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  name: string;
}

const initialState: UserState = {
  name: ''
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    clearUser: (state) => {
      state.name = '';
    }
  }
});
export const { setUser, clearUser } = user.actions;
export default user.reducer;
