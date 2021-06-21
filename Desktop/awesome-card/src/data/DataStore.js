import { createStore, applyMiddleware } from "redux";
import { CarReducer } from "./CarReducer";
import thunk from 'redux-thunk';

export const CarGameData = createStore(CarReducer, applyMiddleware(thunk));