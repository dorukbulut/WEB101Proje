import React from "react";

const Timer = () => {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
  
    const deadline = "December, 31, 2022";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();    
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    React.useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0" role="timer">
        <div className="">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <p id="day">{days < 10 ? "0" + days : days}</p>
            <span className="italic text-violet-500">Days</span>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
            <span className="italic text-violet-500">Hours</span>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
            <span className="italic text-violet-500">Minutes</span>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
            <span className="italic text-violet-500">Seconds</span>
          </div>
        </div>
        
      </div>
    );
  };

  export default Timer;