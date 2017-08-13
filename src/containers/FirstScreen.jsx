import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';

import { fetchDataAction } from '../actions/DataActions';

import MainScreen from '../components/FirstScreen';
import SecondScreen from '../containers/SecondScreen';

import Logo from '../components/Logo';

class FirstScreen extends React.Component {

  getData = ({ position, radius, price }) => {
    this.props.fetchDataAction({ position, radius, price });
  }

  render() {
    return (
      <div>

        <div style={{position:'fixed', width:'100%', height: '100px', zIndex:'1000'}}>
          <MainScreen getData={this.getData}/>
        </div>
        <div style={{height:'100px'}}></div>

        <Logo />

        <SecondScreen />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataAction: bindActionCreators(fetchDataAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)
