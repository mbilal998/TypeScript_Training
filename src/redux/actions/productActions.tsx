import {ActionTypes} from "../constants/action-types";

export const getProducts = () => {
    return {
        type: ActionTypes.GET_PRODUCTS,
    };
};

export const selectedProductId = (id:any) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT_ID,
        payload: id
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};