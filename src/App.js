import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store, { history } from './store';

import MainRouter from './router';
import logo from './logo.svg';
import './App.css';
import FirstScreen from './components/FirstScreen.js'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider>
            <MainRouter>
              {this.props.children}
            </MainRouter>
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
