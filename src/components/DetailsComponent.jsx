import React from 'react';

class DetailsComponent extends React.Component {
  render() {
    const { pointDetails } = this.props;
    const { name, description } = pointDetails;
    return(
      <div>
        DetailsComponent
        <div>{name}</div>
        <div>{description}</div>
      </div>
    )
  }
}

export default DetailsComponent;
