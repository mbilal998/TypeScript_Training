import {combineReducers} from "redux";
import { productReducer, selectedProductReducer,selectProductIdReducer  } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductReducer,
    productId: selectProductIdReducer
});

export type RootState = ReturnType<typeof reducers>

export default reducers;