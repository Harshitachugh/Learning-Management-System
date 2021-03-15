import { applyMiddleware, compose, createStore } from "redux";
import  RootReducer  from "./reducer";
import thunk from "redux-thunk";

export const store= createStore(RootReducer,compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

