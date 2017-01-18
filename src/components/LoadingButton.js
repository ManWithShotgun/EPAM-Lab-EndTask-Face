import React from 'react';
import '../styles/loading-indicator.css'

function LoadingButton() {
  return(
    <a href="#" disabled="true">
      <div>Loading
        <div className="loading-div"></div>
      </div>
    </a>
  )
}

export default LoadingButton;
