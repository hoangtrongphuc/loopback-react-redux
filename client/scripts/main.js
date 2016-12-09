import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';
import {browserHistory, Router} from 'react-router';
import routes from './routes.js';
import App from './containers/App';
import configureStore from './store/configureStore';

window.React = React;
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("main")
);