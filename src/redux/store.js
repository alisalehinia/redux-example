import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cakeReducer } from "./cake/cakeReducer";
import { combineReducers } from "redux";
import { icecreamReducer } from "./icecream/icecreamReducer";
import thunk from "redux-thunk";
import { userReducer } from "./user/userReducer";
const rootReducer = combineReducers({ cake: cakeReducer, icecream: icecreamReducer, user: userReducer })
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store