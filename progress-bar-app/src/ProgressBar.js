// ProgressBar.js

import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percent }) => {
  // Calculate width for the progress bar
  const progressBarStyle = {
    width: `${percent}%`,
    height: '20px',
    backgroundColor: 'green',
    borderRadius: '5px',
  };

  const containerStyle = {
    width: '100%',
    height: '20px',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    overflow: 'hidden', // Ensure the progress bar stays within the container
  };

  return (
    <div style={containerStyle}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

// Define prop types for the ProgressBar component
ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
