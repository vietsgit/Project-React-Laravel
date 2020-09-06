import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Img from './Components/test/testimg';
import TestUpoadFile from './Components/test/TestUpoadFile';
import TestLike from './Components/test/testLike';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'> <Login /> </Route>
        <Route exact path='/home'> <App /> </Route>
        <Route exact path='/test'> <TestLike /> </Route>
        <Route exact path='/tests'><Img /> </Route>
        <Route exact path='/test/uploadImg'><TestUpoadFile /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
