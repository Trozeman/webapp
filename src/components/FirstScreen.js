import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import PowerSlider from './PowerSlider'

const SLIDER_DELAY = 1000;

class FirstScreen extends Component {

  state = {
    userPrice: 200,
    userDistance: 100,
  };


  componentDidMount = () => {
    this.submitFirstScreen();
  }

  submitFirstScreen = () => {
    this.props.getData({
      position: '',
      radius: this.state.userDistance,
      price: this.state.userDistance,
    });
  }

  handleCanSend = (canSend) => {
    canSend && this.submitFirstScreen();
  }

  // sliderPriceSend = false;
  // handleTimeout = '';

  // handleCanSend = (canSend) => {
  //   this.sliderPriceSend = canSend;
  //   if (canSend) {
  //     this.handleTimeout = setTimeout(()=>{
  //       this.sliderPriceSend && this.submitFirstScreen();
  //     }, SLIDER_DELAY)
  //   } else {
  //     clearTimeout(this.handleTimeout);
  //   }
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.handleTimeout);
  // }

  handlePriceSlider = (value) => {
    this.setState({userPrice: value});
  };

  handleDistanceSlider = (value) => {
    this.setState({userDistance: value});
  };


  render() {
    const { userPrice, userDistance } = this.state;
    return (
      <Paper style={{padding: '10px'}}>
        <div style={{display:'flex', justifyContent:'center', itemsAlign:'center'}}>
          <div style={{fontSize: 13, fontWeight: 'bold'}}>
            {`Витратити ${this.state.userPrice} грн.`}
          </div>
        </div>
        <PowerSlider
          sliderStyle={{margin:0}}
          min={0}
          max={10000}
          step={100}
          power={4}
          value={this.state.userPrice}
          onChange={this.handlePriceSlider}
          onDragStart={()=>this.handleCanSend(false)}
          onDragStop={()=>this.handleCanSend(true)}
        />
        <div style={{display:'flex', justifyContent:'center', itemsAlign:'center'}}>
          <div style={{fontSize: 13, fontWeight: 'bold'}}>
            {`Не далі як ${this.state.userDistance} м`}
          </div>
        </div>
        <PowerSlider
          sliderStyle={{margin:0}}
          min={0}
          max={100000}
          step={100}
          power={7}
          value={this.state.userDistance}
          onChange={this.handleDistanceSlider}
          onDragStart={()=>this.handleCanSend(false)}
          onDragStop={()=>this.handleCanSend(true)}
        />
        {/* <FlatButton label="Find places" primary fullWidth={true} onTouchTap={this.submitFirstScreen} /> */}
      </Paper>
    )
  }
}

export default FirstScreen;
