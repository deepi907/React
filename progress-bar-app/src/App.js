// src/App.js

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(50); // Example initial progress of 50%

  const handleIncreaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10); // Increase progress by 10%
    }
  };

  const handleDecreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 10); // Decrease progress by 10%
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Progress Bar Example</h2>
      <ProgressBar percent={progress} />
      <button onClick={handleIncreaseProgress}>Increase Progress</button>
      <button onClick={handleDecreaseProgress}>Decrease Progress</button>
    </div>
  );
};

export default App;
