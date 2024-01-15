import { ActionTypes } from "../constants/action-type"

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedproductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
}
