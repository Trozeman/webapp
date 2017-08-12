import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ListComponent from '../components/ListComponent';

class SecondScreen extends React.Component {
  render() {
    const { data, match } = this.props;
    return (
      <ListComponent placesList={data || []} goTo={this.props.goTo} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
