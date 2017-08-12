import React from 'react';

function PlaceComponent({ name, distance, price }) {
  return (
    <li>
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
    const { placesList } = this.props;
    const renderList = placesList && placesList.length
      ? placesList.map((place)=> <PlaceComponent key={place.id}
                                                 name={place.name}
                                                 distance={place.distance}
                                                 price={place.price} />)
      : null

    return(
      <div className="second-screen">
      <div className="TopLine">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="2231 776 16 16">
  <path id="path" d="M20,11H7.8l5.6-5.6L12,4,4,12l8,8,1.4-1.4L7.8,13H20V11Z" transform="translate(2227 772)"/>
</svg>
      </div>
        <ul>
          {renderList}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
