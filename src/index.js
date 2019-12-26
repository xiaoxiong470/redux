import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import Users from "./components/users";
import ReduxReact from "redux-thunk";
import promiseMiddleware from 'redux-promise';
import FetchMiddleware from "./middleware/FetchMiddleware";
import {createLogger} from "redux-logger";
import polling from "./middleware/redux-polling"


//console.log(applyMiddleware);可以打印方法查看源码
//console.log("rootReducer",rootReducer.toString());
//FetchMiddleware 异步 ;polling轮询
const store=createStore(rootReducer,applyMiddleware(FetchMiddleware(),polling,createLogger()));
//store.dispatch(showUsers());
ReactDOM.render((<Provider store={store}><Users /></Provider>), document.getElementById("root"));
