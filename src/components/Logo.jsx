import React from 'react';
import LogoImage from '../images/takemymoney-logo.png';

const Logo = (props) => {
  return (
    <div style={{marginTop:'40px'}} {...props}>
      <div style={{width: '100%', height: '100%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
        <img src={LogoImage} style={{width:'40%'}} />
      </div>
    </div>
  )
}

export default Logo;
