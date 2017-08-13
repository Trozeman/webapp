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
    // <ListItem
    //   onTouchTap={()=>goTo(`/details/${id}`)}
    //   primaryText={name}
    //   secondaryText={<div>{`${price} гривень`} {`${distance} м`}</div>}
    // />
    <Card style={{marginBottom: '20px'}} onTouchTap={()=>goTo(`/details/${id}`)}>
      <CardMedia>
        <img src="https://unsplash.it/200/100/?random" alt="" />
      </CardMedia>
      <CardTitle title={name} subtitle={<div>{`${price} гривень`} {`${distance} м`}</div>} />
      <CardText>{description}</CardText>
    </Card>
  );
}

class ListComponent extends React.Component {
  render() {
    const { placesList, goBack } = this.props;
    // const renderList = placesList && placesList.length
    //   ? placesList.map((place)=> <PlaceComponent key={place.id}
    //                                              name={place.name}
    //                                              distance={place.distance}
    //                                              price={place.price}
    //                                              id={place.id}
    //                                              goTo={this.props.goTo} />)
    //   : null

    const renderList = placesList && placesList.length
      ? placesList.map((place)=> <PlaceComponent key={place.id} place={place} goTo={this.props.goTo} />)
      : null

    return(
      <div>
        {/* <AppBar
          title="Home"
          iconElementLeft={<IconButton><ArrowBack /></IconButton>}
          onLeftIconButtonTouchTap={()=>goBack()}
        /> */}
        {/* <List> */}
          {renderList}
        {/* </List> */}
      </div>
    );
  }
}

export default ListComponent;
