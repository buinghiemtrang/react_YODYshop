import { ActionsType } from "../constants/ActionsType";

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case ActionsType.SET_PRODUCT:
            return {
                ...state,
                products: payload,
            };

        // case ActionsType.SHOW_MORE_PRODUCT:
        //   return {
        //     ...state,
        //     products: state.products.concat(payload),
        //   };

        default:
            return {
                ...state,
            };
    }
};

export const selectedProductReducer = (state = {}, action) => {
    const { payload } = action;
    switch (action.type) {
        case ActionsType.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
