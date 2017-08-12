import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ListComponent from '../components/ListComponent';

class SecondScreen extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <ListComponent placesList={data || []} />
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
    changePage: bindActionCreators(() => push('/details'), dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
