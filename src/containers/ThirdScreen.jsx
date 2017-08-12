import React from 'react';
import { connect } from 'react-redux'
import DetailsComponent from '../components/DetailsComponent';

class ThirdScreen extends React.Component {

  getDetails = (pointId) => {
    const { data } = this.props;
    const pointDetails = data && data.find(({id})=>id===pointId);
    return pointDetails || {};
  }

  render() {
    const { match } = this.props;
    const pointId = match.params.pointId;
    const pointDetails = this.getDetails(pointId);
    return (
      <DetailsComponent pointDetails={pointDetails} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(ThirdScreen);
