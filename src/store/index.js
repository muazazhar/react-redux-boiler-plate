import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//can use this also
// const store = createStore(reducer,{}, applyMiddleware(thunk));

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
