import { combineReducers, applyMiddleware, compose } from 'redux';
import { legacy_createStore as reduxCreateStore,} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import { PostsReducer } from '../posts/reducers';
import { UserReducer } from '../users/reducers';
import { ItemsReducer } from '../items/reducers';
import { CartsReducer } from '../carts/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            posts: PostsReducer,
            users: UserReducer,
            items: ItemsReducer,
            carts: CartsReducer
        }),
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history), thunk)
            // DEBUG MODE
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
