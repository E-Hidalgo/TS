import { useEffect, useState } from "react";
import { GiExitDoor, GiEntryDoor } from "react-icons/gi"
import Timer from "../Timer/Timer";

const InOut: React.FC = (props: any) => {

    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)

    const [date, setDate] = useState(today)
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);


    useEffect(() => {
        let interval: any = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const clockBatteries = () => {
        setDate(today)
    }

    useEffect(() => {
        const timerId = setInterval(clockBatteries, 1000)
    }, [])

    return (
        <div className="inOut">
            <div className="inOut__container">
                <div className="in">
                    <GiExitDoor className="hours-icon" onClick={handleStart} />
                </div>
                <div className="timer">
                    <p>{today.toLocaleString()}</p>
                    <Timer time={time} />
                </div>
                <div className="out">
                    <GiEntryDoor className="hours-icon" onClick={handlePauseResume}/>
                </div>
            </div>
        </div>
    );
};

export default InOut;
