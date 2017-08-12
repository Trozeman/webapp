import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SecondScreen extends React.Component {
  render() {
    return (
      <div>
        <div>SECOND</div>
        <button onClick={() => this.props.changePage()}>/details</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/details')
}, dispatch)

export default connect(null, mapDispatchToProps)(SecondScreen);
