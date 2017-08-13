import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchDataAction } from '../actions/DataActions';

import MainScreen from '../components/FirstScreen';

class FirstScreen extends React.Component {

  getData = ({ position, radius, price }) => {
    this.props.fetchDataAction({ position, radius, price });
  }

  render() {
    return (
      <MainScreen getData={this.getData} />
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
