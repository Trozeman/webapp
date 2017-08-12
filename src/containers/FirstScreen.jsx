import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchDataAction } from '../actions/DataActions';

class FirstScreen extends React.Component {
  render() {
    const { data } = this.props;
    const showData = data && data.length>=0
      ? <div>NOPE</div>
      : <div>YEP</div>;

    return (
      <div>
        <div>FIRST</div>
        {showData}
        <button onClick={()=>{ this.props.fetchDataAction([{'go':'gogo'}]) } }>fetch</button>
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
