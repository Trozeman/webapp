import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import MainRouter from './router';
import logo from './logo.svg';
import './App.css';
import FirstScreen from './components/FirstScreen.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MainRouter>
            {this.props.children}
          </MainRouter>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
