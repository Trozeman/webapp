import React from 'react';
import DetailsComponent from '../components/DetailsComponent';

class ThirdScreen extends React.Component {
  render() {
    const { match } = this.props;
    const pointId = match.params.pointId;
    return (
      <DetailsComponent pointId={pointId} />
    );
  }
}

export default ThirdScreen;
