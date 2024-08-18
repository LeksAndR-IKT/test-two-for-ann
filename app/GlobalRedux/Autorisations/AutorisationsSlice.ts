"use client";
import { createSlice, } from '@reduxjs/toolkit';

interface User {
    id: number
    login: string
    password: string
}

interface initialState {
    users: User[]
}

const initialState: initialState = {
    users: [
      {id:0, login: 'user', password: 'user!'},
    ]
};
  
const autorisationSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
      setUser(state, action) {
        state.users.push({id: state.users.length, login: action.payload.username, password: action.payload.password})
      }
    },
});

export const { setUser } = autorisationSlice.actions;
export default autorisationSlice.reducer;

export const verificationOfAuthorization = (arrayUsers: User[], username: string, password: string): boolean => {
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].login === username.toString() && arrayUsers[i].password === password.toString()) return true
    }
    return false
}