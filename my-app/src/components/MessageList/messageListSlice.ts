import { createSlice } from '@reduxjs/toolkit';

export interface actionPayload {
  id: string
  message: string
  hours: number
  minutes: number
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
      console.log(action.payload)
      state.messages.push(action.payload);
    },
  },
});

const { actions, reducer } = messagesSlice;

export default reducer;

export const { addMessage } = actions;
