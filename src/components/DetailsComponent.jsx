import React from 'react';

class DetailsComponent extends React.Component {
  render() {
    const { pointId } = this.props;
    return(
      <div>
        DetailsComponent
        <div>{pointId}</div>
      </div>
    )
  }
}

export default DetailsComponent;
