import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from "./reducers";
import './index.css';
import Game from './components/Game';


let store = createStore(Reducers, {});
ReactDOM.render(
  <Provider store={store} >
  <Game />
  </Provider>,
  document.getElementById('root')
);



