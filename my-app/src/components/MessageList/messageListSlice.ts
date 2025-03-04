import { createSlice } from '@reduxjs/toolkit';

export interface ActionPayload {
  id: string
  message: string
  date: number
  weekDay: string
}

interface Action {
  type: string,
  payload:ActionPayload
}

export interface Messages {
  messages: ActionPayload[]
}

const initialState: Messages = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: Action) => {
      state.messages.push(action.payload);
    },
  },
});

const { actions, reducer } = messagesSlice;

export default reducer;

export const { addMessage } = actions;
