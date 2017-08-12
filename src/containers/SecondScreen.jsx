import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import ListComponent from '../components/ListComponent';

class SecondScreen extends React.Component {
  render() {
    const { data, match } = this.props;
    return (
      <div>
        <ListComponent placesList={data || []} />
        <Link to='/details/id1'>link to id1</Link>
        <Link to='/details/id2'>link to id2</Link>
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
    changePage: bindActionCreators(() => push('/details'), dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
