import React, { Component } from 'react';

class FirstScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPrice: '',
      userDistance: ''
    };

    this.onChangeUserPriceHandler = this.onChangeUserPriceHandler.bind(this);
    this.onChangeUserDistanceHandler = this.onChangeUserDistanceHandler.bind(this);
  }

  submitFirstScreen(event) {
    event.preventDefault();   
    //TODO call to api
  }
  
  onChangeUserPriceHandler(event) {
    const userPrice = event.target.value;

    this.setState({
      userPrice: userPrice
    })
  }
  
  onChangeUserDistanceHandler(event) {
    const userDistance = event.target.value;

    this.setState({
      userDistance: userDistance
    })
  }
  
  render() {
    const { userPrice, userDistance } = this.state;

    return (
      <div className="first-screen">
        <form onSubmit={this.submitFirstScreen}>
          <input id="user-price"
                 name="userPrice"
                 value={userPrice}
                 onChange={this.onChangeUserPriceHandler}
                 placeholder="Enter price" />
          <input id="user-distance"
                 name="userDistance"
                 value={userDistance}
                 onChange={this.onChangeUserDistanceHandler}
                 placeholder="Enter distance" />
          <input value="Find places" 
                 type="submit" />
        </form>
      </div>
    )
  }
}

export default FirstScreen;