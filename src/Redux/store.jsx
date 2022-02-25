import { createStore } from "redux";
import { reduce } from "./reduce"
export const store = createStore(reduce,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());