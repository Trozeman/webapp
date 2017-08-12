import React from 'react';

class ListComponent extends React.Component {
  render() {
    const { placesList } = this.props;
    const renderList = placesList && placesList.length
      ? placesList.map(({name})=><li key={name}>{name}</li>)
      : null

    return(
      <div>
        <ul>
          {renderList}
        </ul>
      </div>
    )
  }
}

export default ListComponent;
