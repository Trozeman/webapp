import React from 'react';

function PlaceComponent({ name, address, price }) {
  return (
    <li>
      <div>{name}</div>
      <div>{address}</div>
      <div>{price} гривень</div>
    </li>
  );
}

class ListComponent extends React.Component {
  render() {
    const { placesList } = this.props;
    const renderList = placesList && placesList.length
      ? placesList.map((place)=> <PlaceComponent key={place.id}
                                                 name={place.name}
                                                 address={place.address}
                                                 price={place.price} />)
      : null

    return(
      <div>
        <ul>
          {renderList}
        </ul>
      </div>
    );
  }
}

export default ListComponent;
