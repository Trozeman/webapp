import React from 'react';
import { push, goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ListComponent from '../components/ListComponent';

class SecondScreen extends React.Component {
  render() {
    const { data, match, goTo, goBack } = this.props;
    return (
      <ListComponent placesList={data || []} goTo={goTo} goBack={goBack} />
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
    goTo: (url) => dispatch(push(url)),
    goBack: () => dispatch(goBack()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
