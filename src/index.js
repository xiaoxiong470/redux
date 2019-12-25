import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import Users from "./components/users";
import ReduxReact from "redux-thunk";


//console.log("rootReducer",rootReducer.toString());
const store=createStore(rootReducer,applyMiddleware(ReduxReact));
//store.dispatch(showUsers());
ReactDOM.render((<Provider store={store}><Users /></Provider>), document.getElementById("root"));
