"use client";

import reducer from './Autorisations/AutorisationsSlice';
import { configureStore } from '@reduxjs/toolkit';

const setupStore = () => {
    return configureStore({
        reducer,
    });
}

export type RootReducerType = ReturnType<typeof reducer>
export type StoreType = ReturnType<typeof setupStore>
export type AppDispatch = StoreType['dispatch']

export default setupStore;