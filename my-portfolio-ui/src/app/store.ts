import { createStore } from '@reduxjs/toolkit';
import { InitialState } from '../InitialState';
import { RootReducer } from '../reducers/RootReducer';

let store = createStore(
  RootReducer,
  InitialState
)

export default store
