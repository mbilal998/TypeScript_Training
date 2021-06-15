import {ActionTypes} from "../constants/action-types";

const initialState = {
    products: []
}

const selectedId = {
    id: ''
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.GET_PRODUCTS:
            return {
                ...state
            }
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export const selectProductIdReducer = (state = selectedId, {type, payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT_ID:
            return {
                ...state,
                id: payload
            }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}