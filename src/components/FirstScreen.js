import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import PowerSlider from './PowerSlider'

const SLIDER_DELAY = 1000;

class FirstScreen extends Component {

  state = {
    userPrice: 200,
    userDistance: 100,
    latitude: 0,
    longitude: 0,
  };


  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({latitude: position.coords.latitude, longitude:position.coords.longitude}, ()=>{
        this.submitFirstScreen();
      });
    });
  }

  submitFirstScreen = () => {
    this.props.getData({
      position: `${this.state.latitude},${this.state.longitude}`,
      radius: this.state.userDistance,
      price: this.state.userPrice,
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
      <Paper
        rounded={false}
        style={{
          paddingLeft: '10px',
          paddingRight: '10px',
          height:'100%',
          display:'flex',
          flexDirection: 'column',
          justifyContent:'center'
        }}
      >

          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <span style={{fontSize: 13, fontWeight: 'bold', color:'rgba(0,0,0,0.40)'}}>
              Витратити&nbsp;
            </span>
            <span style={{fontSize: 13, fontWeight: 'bold', color:'#00A3D6'}}>
              $&nbsp;{this.state.userPrice} грн.
            </span>
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
            <span style={{fontSize: 13, fontWeight: 'bold', color:'rgba(0,0,0,0.40)'}}>
              Не далі як&nbsp;
            </span>
            <span style={{fontSize: 13, fontWeight: 'bold', color:'#7AC218'}}>
              {this.state.userDistance} m.
            </span>
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

      </Paper>
    )
  }
}

export default FirstScreen;
