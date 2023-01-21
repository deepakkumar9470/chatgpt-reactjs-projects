import {useState, useEffect} from 'react'
import './timer.scss';

function Timer() {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
   useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

  return (
    <div className="timer">
      <div className="seconds">
        Seconds: {seconds}
      </div>
      <div className="controls">
        <button onClick={toggle}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}



export default Timer;