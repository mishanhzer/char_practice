import { createSlice } from '@reduxjs/toolkit';

export interface actionPayload {
  id: string
  message: string
  hour?: number
  minutes: number 
  date?: number 
  weekNumber: number
  boolToday: boolean
}

interface action {
  type: string,
  payload: actionPayload
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
    addMessage: (state, action: action) => {
      state.messages.push(action.payload);
    },
  },
});

const { actions, reducer } = messagesSlice;

export default reducer;

export const { addMessage } = actions;
