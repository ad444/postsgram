import React from 'react';
import loading from '../Images/loading.gif';
import '../CSS/spinner.css';

const Spinner = () => {
  return (
      <>
        <img id='loadingSpinner' src={loading} alt="loading..." />
      </>
  )
};

export default Spinner;
