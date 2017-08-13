import React from 'react';
import { push, goBack } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import DetailsComponent from '../components/DetailsComponent';

class ThirdScreen extends React.Component {

  getDetails = (pointId) => {
    const { data } = this.props;
    const pointDetails = data && data.find(({id})=>id===pointId);
    return pointDetails || {};
  }

  render() {
    const { match, goBack } = this.props;
    const pointId = match.params.pointId;
    const pointDetails = this.getDetails(pointId);
    return (
      <div>
        <div style={{display: 'fixed'}}>
          <AppBar
            title="Home"
            iconElementLeft={<IconButton><ArrowBack /></IconButton>}
            onLeftIconButtonTouchTap={()=>goBack()}
          />
        </div>
        <DetailsComponent pointDetails={pointDetails} goBack={goBack} />
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
    goTo: (url) => dispatch(push(url)),
    goBack: () => dispatch(goBack()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen);
