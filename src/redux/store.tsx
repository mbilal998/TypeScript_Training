import {createStore, compose, applyMiddleware} from "redux";
import reducers from './reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// This line only because of typescript syntax
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
//

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store