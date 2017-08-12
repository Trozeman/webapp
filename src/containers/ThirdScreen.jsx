import React from 'react';
import { push, goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DetailsComponent from '../components/DetailsComponent';

class ThirdScreen extends React.Component {

  getDetails = (pointId) => {
    const { data } = this.props;
    const pointDetails = data && data.find(({id})=>id===pointId);
    return pointDetails || {};
  }

  render() {
    const { match, goBack } = this.props;
    const pointId = match.params.pointId;
    const pointDetails = this.getDetails(pointId);
    return (
      <DetailsComponent pointDetails={pointDetails} goBack={goBack} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen);
