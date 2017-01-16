/**
 * LoadingButton.react.js
 *
 * Wraps the loading indicator in a tag with the .btn--loading class
 */

import React from 'react';
import LoadingIndicator from './LoadingIndicator';

function LoadingButton() {
  return(
    <a href="#" className="btn--loading" disabled="true">
      <LoadingIndicator />
    </a>
  )
}

export default LoadingButton;
