import { ActionsType } from "../constants/ActionsType";
import callApi from "../../api/callApi";

export const actFetchDataRequest = () => {
    return (dispatch) => {
        return callApi("", "GET", null).then(
            (res) => {
                dispatch(actFetchData(res.data));
            }
        );
    };
};

export const actFetchData = (data) => {
    return {
        type: ActionsType.SET_PRODUCT,
        payload: data,
    };
};

// export const actAddDataPagination = (page, limit) => {
//   return (dispatch) =>
//     callApi(`?_page=${page}&_limit=${limit}`, "GET", null).then((res) => {
//       dispatch(actAddData(res.data));
//     });
// };

// export const actAddData = (data) => {
//   return {
//     type: ActionsType.SHOW_MORE_PRODUCT,
//     payload: data,
//   };
// };

export const selectedProduct = (product) => {
    return {
        type: ActionsType.SELECTED_PRODUCT,
        payload: product,
    };
};

export const actAddToCart = (product, quantity) => {
    return {
        type: ActionsType.ADD_TO_CART,
        payload: { product, quantity },
    };
};

export const actRemoveProduct = (id) => {
    return {
        type: ActionsType.REMOVE_PRODUCT,
        payload: id,
    };
};
