import React from 'react';

class DetailsComponent extends React.Component {
  render() {
    const { pointDetails, goBack } = this.props;
    const { name, description } = pointDetails;
    return(
      <div className="details-components">
        <div className="TopLine" onClick={()=>goBack()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="2231 776 16 16">
            <path id="path" d="M20,11H7.8l5.6-5.6L12,4,4,12l8,8,1.4-1.4L7.8,13H20V11Z" transform="translate(2227 772)"/>
          </svg>
          <p>Список послуг</p>
        </div>
          <img src="http://placehold.it/600x450/" />
          <div className="MainName">{name}</div>
          <div className="MainDesc">{description}</div>
      </div>
    )
  }
}

export default DetailsComponent;
