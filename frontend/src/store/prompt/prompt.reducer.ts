import { AnyAction, Reducer } from "redux";

export const promptAction = {
    UPDATE_CURRENT_STATE: "prompt/UPDATE_CURRENT_STATE",
};

const initialState: string[] = [];

export const promptReducer: Reducer = (
    state = initialState,
    action: AnyAction
) => {
    const { type, payload } = action;

    switch (type) {
        case promptAction.UPDATE_CURRENT_STATE:
            return payload;
        default:
            return state;
    }
};
