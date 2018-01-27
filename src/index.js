import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import "./index.css";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBfC5q8Ww9Sk6BBdRZbGa5VPd_KTUQoEeo",
  authDomain: "x5-resonant-ward-4.firebaseapp.com",
  databaseURL: "https://x5-resonant-ward-4.firebaseio.com",
  projectId: "x5-resonant-ward-4",
  storageBucket: "",
  messagingSenderId: "465851319200"
};
firebase.initializeApp(config);

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(applyMiddleware(sagaMiddleware));
/** Creating store */
export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
