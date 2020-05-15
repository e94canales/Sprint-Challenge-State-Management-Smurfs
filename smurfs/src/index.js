import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { mainReducer } from './reducer'
import thunk from 'redux-thunk'

const store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
