import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  withRouter,
} from 'react-router-dom';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import UserBar from './components/UserBar';
import Login from './components/Login';
import List from './components/List';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

import PrivateRoute from './components/PrivateRoute';

const Menu = () => (
  <div>
    <NavLink to="/">Home </NavLink>
    <NavLink to="/item/2"> Item</NavLink>
  </div>
);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

class App extends Component {
  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <UserBar />
            <Menu />
            <Switch>
              <Route path="/login/" component={Login} />
              <PrivateRoute component={Detail} path="/item/:id" />
              <PrivateRoute path="/" component={List} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </JssProvider>
    );
  }
}

export default App;
