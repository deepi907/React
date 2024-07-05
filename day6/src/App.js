import React from 'react';
import './index.css'; // Ensure your styles are imported

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      ballPosition: { x: 0, y: 0 },
      ballDirection: { x: 1, y: 1 },
      isNight: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.ballTimerID = setInterval(() => this.moveBall(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.ballTimerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  moveBall() {
    this.setState((prevState) => {
      let newX = prevState.ballPosition.x + prevState.ballDirection.x;
      let newY = prevState.ballPosition.y + prevState.ballDirection.y;
      let newDirectionX = prevState.ballDirection.x;
      let newDirectionY = prevState.ballDirection.y;
      let isNight = prevState.isNight;

      // Check for collision with walls
      if (newX >= window.innerWidth - 30 || newX <= 0) {
        newDirectionX = -prevState.ballDirection.x;
        isNight = !prevState.isNight; // Toggle night mode
      }

      if (newY >= window.innerHeight - 30 || newY <= 0) {
        newDirectionY = -prevState.ballDirection.y;
        isNight = !prevState.isNight; // Toggle night mode
      }

      return {
        ballPosition: { x: newX, y: newY },
        ballDirection: { x: newDirectionX, y: newDirectionY },
        isNight: isNight,
      };
    });
  }

  render() {
    const { ballPosition, isNight } = this.state;
    const backgroundColor = isNight ? 'black' : 'white';
    const textColor = isNight ? 'white' : 'black';

    return (
      <div className="clock-container" style={{ backgroundColor: backgroundColor, color: textColor }}>
        <div className="clock-circle">
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
        <div
          className="ball"
          style={{ left: `${ballPosition.x}px`, top: `${ballPosition.y}px` }}
        ></div>
      </div>
    );
  }
}

export default Clock;
