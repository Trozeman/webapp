import React from 'react';

class DetailsComponent extends React.Component {
  render() {
    const { pointDetails, goBack } = this.props;
    const { name, description, image, address, price } = pointDetails;
    
    return(
      <div className="details-components">
        <img src={image} />
        <div className="place-name">{name}</div>
        <div className="place-address">{address}</div>
        <div className="place-price">{`Середній чек: ${price} гривень`}</div>
        <div className="place-description">{description}</div>
      </div>
    )
  }
}

export default DetailsComponent;
