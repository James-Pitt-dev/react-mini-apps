import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import { useState, useRef, useEffect } from "react";

const Timer = () => {
    
    const timerRef = useRef(null);

    // fetch saved time if exists in local storage, else use 0
    const [time, setTime] = useState(() => {
        const t = Number(localStorage.getItem('time')) || 0;
        return t
    });
    const [isRunning, setIsRunning] = useState(false);
    
    // whenever time var in array changes, save its value under time tag in local storage
    useEffect(() => {
        localStorage.setItem('time', time);
    }, [time]);

    const toggleTimer = () => {
        if (isRunning) {
            // clear interval to stop timer
            clearInterval(timerRef.current)
            timerRef.current = null;
        } else {
            //start the timer
            timerRef.current = setInterval(() => {
                setTime((prevTime) => { return prevTime + 1 })
            }, 1000)
            
        }

        setIsRunning(!isRunning);
     }
    
     const resetTimer = () => { 
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        timerRef.current = null;
        localStorage.removeItem('time');
      }

    return ( <>
<div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <TimerDisplay timerRef={timerRef} time={time}/>
            <TimerControls timerRef={timerRef} resetTimer={resetTimer} toggleTimer={toggleTimer} isRunning={isRunning}/>
</div>

</> );
}
 
export default Timer;