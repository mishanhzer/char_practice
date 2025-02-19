import { createSlice } from '@reduxjs/toolkit';

export interface actionPayload {
  id: string
  message: string
  Hours: number
  Minutes: number
}

export interface messages {
  messages: actionPayload[]
}

const initialState: messages = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

const { actions, reducer } = messagesSlice;

export default reducer;

export const { addMessage } = actions;
