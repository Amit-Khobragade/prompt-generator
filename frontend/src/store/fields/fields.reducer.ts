import { AnyAction, Reducer } from "redux";

export const fieldAction = {
    UPDATE_CURRENT_STATE: "field/UPDATE_CURRENT_STATE",
};

const initialState = {};

export const fieldReducer: Reducer = (
    state = initialState,
    action: AnyAction
) => {
    const { type, payload } = action;

    switch (type) {
        case fieldAction.UPDATE_CURRENT_STATE:
            return { ...state, ...payload };
        default:
            return state;
    }
};
