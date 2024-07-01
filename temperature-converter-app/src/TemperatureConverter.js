import React, { useState } from 'react';
import Lottie from 'lottie-react';
import thermometerAnimation from './assets/thermometer.json'; // Adjust the path as per your file location
import './App.css';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');

  const handleChange = (e) => {
    setCelsius(e.target.value);
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const toKelvin = (celsius) => {
    return parseFloat(celsius) + 273.15;
  };

  const roundToTwoDecimal = (num) => {
    return Math.round(num * 100) / 100;
  };

  const celsiusNumber = parseFloat(celsius);
  const fahrenheit = roundToTwoDecimal(toFahrenheit(celsiusNumber));
  const kelvin = roundToTwoDecimal(toKelvin(celsiusNumber));

  // Determine emoji based on temperature
  const emoji = celsiusNumber > 98 ? ' 😢' : '';

  return (
    <div className="temperature-sticker">
      <div className="thermometer-animation">
        <Lottie
          animationData={thermometerAnimation}
          loop
          autoplay
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="temperature-input-output">
        <input
          type="number"
          value={celsius}
          onChange={handleChange}
          data-testid="celsius-input"
          placeholder="Enter °C"
        />
        <p data-testid="output">
          {celsius}°C is {isNaN(fahrenheit) ? '' : fahrenheit}°F and {isNaN(kelvin) ? '' : kelvin}K.
          {emoji}
        </p>
      </div>
    </div>
  );
}

export default TemperatureConverter;
