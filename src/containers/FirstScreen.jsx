import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';

import { fetchDataAction } from '../actions/DataActions';

import MainScreen from '../components/FirstScreen';
import SecondScreen from '../containers/SecondScreen';

class FirstScreen extends React.Component {

  getData = ({ position, radius, price }) => {
    this.props.fetchDataAction({ position, radius, price });
  }

  render() {
    return (
      <div>
        {/* <AppBar
          style={{position:'fixed'}}
          title="Take my money"
          // iconElementLeft={<IconButton><ArrowBack /></IconButton>}
          // onLeftIconButtonTouchTap={()=>goBack()}
        />
        <div style={{height:'66px'}}></div> */}
          <div style={{position:'fixed', width:'100%', zIndex:'1000'}}>
            <MainScreen getData={this.getData}/>
          </div>
          <div style={{height:'100px'}}></div>
        <SecondScreen />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataAction: bindActionCreators(fetchDataAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)
