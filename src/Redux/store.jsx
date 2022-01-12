import { createStore } from "redux";
import { reduce } from "./reduce"
export const store = createStore(reduce);