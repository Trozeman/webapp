import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import FirstScreen from './containers/FirstScreen'
import SecondScreen from './containers/SecondScreen'
import ThirdScreen from './containers/ThirdScreen'

const MainRouter = () => (
    <div>
      <Route exact path="/" component={FirstScreen}/>
      <Route exact path="/list" component={SecondScreen}/>
      <Route exact path="/details/:pointId" component={ThirdScreen}/>
    </div>
)

export default MainRouter;
