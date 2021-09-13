import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import Main from './Main';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./assets/reducer"
import { BrowserRouter } from "react-router-dom";

const store: Store<MovieState, MovieAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


const rootElement = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>,
  rootElement
);
