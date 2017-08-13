import React from 'react';

class DetailsComponent extends React.Component {
  render() {
    const { pointDetails, goBack } = this.props;
    const { name, description, image } = pointDetails;
    return(
      <div className="details-components">
        <img src={image} />
        <div className="MainName">{name}</div>
        <div className="MainDesc">{description}</div>
      </div>
    )
  }
}

export default DetailsComponent;
