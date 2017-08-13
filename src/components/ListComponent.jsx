import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

function PlaceComponent({ place, goTo }) {
  const { name, distance, price, id, description } = place
  return (
    <Card style={{marginBottom: '20px'}} onTouchTap={()=>goTo(`/details/${id}`)}>
      <CardMedia>
        <img src="http://placehold.it/600x250/" alt="" />
      </CardMedia>
      <CardTitle title={name} subtitle={<div>{`${price} гривень`} {`${distance} м`}</div>} />
    </Card>
  );
}

class ListComponent extends React.Component {
  render() {
    const { placesList, goBack } = this.props;
    const renderList = placesList && placesList.length
      ? placesList.map((place)=> <PlaceComponent key={place.id} place={place} goTo={this.props.goTo} />)
      : null

    return(
      <div style={{paddingLeft:'10px', paddingRight:'10px'}}>
        {renderList}
      </div>
    );
  }
}

export default ListComponent;
