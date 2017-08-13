import React from 'react';
import Slider from 'material-ui/Slider';

/**
 * You may find yourself needing a custom scale.
 * Here is how you would implement a [logarithmic scale](https://simple.wikipedia.org/wiki/Logarithmic_scale).
 */

class PowerSlider extends React.Component {

  transform = (value) => {
    const { power, max } = this.props;
    return Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
  }

  reverse = (value) => {
    const { power, max } = this.props;
    return (1 / power) * Math.log(((Math.exp(power) - 1) * value / max) + 1) * max;
  }

  handleSlider = (event, value) => {
    this.props.onChange(this.transform(value))
  };

  render() {
    const { getValue, power, onChange, value, ...rest } = this.props;
    return(
      <Slider
        {...rest}
        value={this.reverse(value)}
        onChange={this.handleSlider}
      />
    )
  }
}

export default PowerSlider;
