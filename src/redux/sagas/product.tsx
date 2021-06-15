import {call, put, takeEvery} from "redux-saga/effects"
import {getProducts, selectedProduct} from "./services/product";
import {ActionTypes} from "../constants/action-types";

function* fetchProducts():any {
    try {
        const Data = yield call(getProducts)
        yield put({type: ActionTypes.SET_PRODUCTS, payload: Data})
    } catch (e) {
        yield put({type: ActionTypes.SET_PRODUCTS, payload: {}})
    }
}

function* getselectedProduct(action:any):any {
    try {
        const Data = yield call(selectedProduct,action.payload);
        yield put({type: ActionTypes.SELECTED_PRODUCT, payload: Data})
    } catch (e) {
        yield put({type: ActionTypes.SELECTED_PRODUCT, payload: {}})
    }
}

function* productSaga() {
    yield takeEvery("GET_PRODUCTS", fetchProducts)
    yield takeEvery("SELECTED_PRODUCT_ID", getselectedProduct)
}

export default productSaga;