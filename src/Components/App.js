import { useState } from 'react';
import './App.css';
import DisplayTime from './DisplayTime/DisplayTime';
import Buttons from './Buttons/Buttons';

function App() {
  const [time, setTime] = useState({ hour: 0, minutes: 0, seconds: 0 })
  const [run, setRun] = useState()
  const [btnStart, setbtnStart] = useState(true)

  function start() {
    setbtnStart(!btnStart)
    updateTime();
    setRun(setInterval(updateTime, 1000))
  };

  function stop() {
    setbtnStart(!btnStart)
    clearInterval(run)
    setTime({ hour: 0, minutes: 0, seconds: 0 })
  };

  function wait() {
    setbtnStart(true)
    clearInterval(run)
  };

  function reset() {
    setbtnStart(false)
    clearInterval(run)
    time.seconds = 0
    time.minutes = 0;
    time.hour = 0;
    setRun(setInterval(updateTime, 1000))
    clearInterval(run)
  };

  let updateTime = () => {
    if (time.seconds === 60) {
      time.minutes += 1;
      time.seconds = 0;
    }
    if (time.minutes === 60) {
      time.hour += 1;
      time.minutes = 0;
    }
    if (time.hour === 24) {
      time.hour = 0;
      time.seconds = 0;
    }
    time.seconds += 1
    return setTime({ hour: time.hour, minutes: time.minutes, seconds: time.seconds })
  }
  return (
    <div className="wrapper">
      Секундомір

      <DisplayTime
        seconds={time.seconds}
        minutes={time.minutes}
        hour={time.hour}
      />

      <Buttons
        start={start}
        stop={stop}
        wait={wait}
        reset={reset}
        btnStart={btnStart} />

    </div>
  );
}

export default App;
