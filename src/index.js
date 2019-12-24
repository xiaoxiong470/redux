import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import Users from "./components/users";


//console.log("rootReducer",rootReducer.toString());
const store=createStore(rootReducer);
//store.dispatch(showUsers());
ReactDOM.render((<Provider store={store}><Users /></Provider>), document.getElementById("root"));
