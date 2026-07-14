import { useRef, useEffect } from "react";

const TimerControls = ({toggleTimer, resetTimer, isRunning}) => {

    const startButtonRef = useRef(null);

    useEffect(() => {
        if (startButtonRef.current) {
            startButtonRef.current.focus();
            console.log(document.activeElement);
        }
    }, []);

    return ( <>
    {/* Start btn */}
        <button 
            ref={startButtonRef}
            onClick={toggleTimer} 
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                {isRunning ? 'Pause' : 'Start'}
        </button>
        {/* Reset btn */}
        <button onClick={resetTimer} className="mt-3 ml-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Reset
        </button>
    </> );
}
 
export default TimerControls;