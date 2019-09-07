import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./components/MainRouter";
import "./styles.css";

const mainReducer = () => {
  return {};
};

const initialState = {
  sessionUser: {},
  users: [],
  projects: [],
  selectedProject: {}
};

const store = createStore(mainReducer, initialState);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
