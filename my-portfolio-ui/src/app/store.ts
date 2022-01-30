import { InitialState } from '../InitialState';
import { RootReducer } from '../reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import ReduxThunk from "redux-thunk"

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'',
  responseType: 'json'
});

let store = createStore(
  RootReducer,
  InitialState,
  applyMiddleware(axiosMiddleware(client), ReduxThunk)
)

export default store
