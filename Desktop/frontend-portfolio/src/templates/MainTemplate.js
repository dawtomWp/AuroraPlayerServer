import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GlobalStyle} from '../theme/GlobalStyle';



class MainTemplate extends Component {
  
  render ()  {
    const {children} = this.props;

    return (
      <div>
    
          <GlobalStyle/>  
  
            <> 
            {children}
            </>
      

      </div>
    );
  }
}



MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MainTemplate; //high oreder component