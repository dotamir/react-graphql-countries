import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Provider from 'react-redux/es/components/Provider';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import thunk from "redux-thunk";
import * as reducers from "./redux";
import AppContainer from "./containers/App/AppContainer";
import { ScrollContext } from "react-router-scroll-4";
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';

const history = createBrowserHistory();
const appReducer = combineReducers({ ...reducers, router: connectRouter(history) });
const rootReducer = (state, action) => {
    return appReducer(state, action);
};
const historyMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, historyMiddleware))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <ScrollContext>
                    <AppContainer />
                </ScrollContext>
            </>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
