import React from 'react';
import { Link } from 'react-router-dom'

const IconBack = (props) => (
  <div {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2231 776 16 16">
      <path id="path" d="M20,11H7.8l5.6-5.6L12,4,4,12l8,8,1.4-1.4L7.8,13H20V11Z" transform="translate(2227 772)"/>
    </svg>
  </div>
);

function PlaceComponent({ name, distance, price, _id, goTo }) {
  return (
    <li onClick={()=>goTo(`/details/${_id}`)}>
        <div className="box">
          <div className="Name">{name}</div>
          <div className="Price">{price} гривень</div>
        </div>
        <div className="Distance">{distance+" m."}</div>
    </li>
  );
}

class ListComponent extends React.Component {
  render() {
    const { placesList, goBack } = this.props;
    const renderList = placesList && placesList.length
      ? placesList.map((place)=> <PlaceComponent key={place._id}
                                                 name={place.name}
                                                 distance={place.distance}
                                                 price={place.price}
                                                 _id={place._id}
                                                 goTo={this.props.goTo} />)
      : null

    return(
      <div className="second-screen">
      <div className="TopLine">
      <IconBack onClick={()=>goBack()}/>
      </div>
        <ul>
          {renderList}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
