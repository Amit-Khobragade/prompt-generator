import { combineReducers } from "redux";
import { promptReducer } from "./prompt/prompt.reducer";
import { fieldReducer } from "./fields/fields.reducer";

export const rootReducer = combineReducers({
    prompt: promptReducer,
    fields: fieldReducer,
});
