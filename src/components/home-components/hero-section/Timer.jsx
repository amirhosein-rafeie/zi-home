import { useState, useEffect, useRef } from "react";

function Timer() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("18:13:40");

  const toPersianDigits = (num) => {
    return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  };

  const getTimeRemaining = (totalSeconds) => {
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { total: totalSeconds, hours, minutes, seconds };
  };

  const startTimer = (totalSeconds) => {
    let { hours, minutes, seconds } = getTimeRemaining(totalSeconds);
    setTimer(
      (seconds > 9 ? seconds : "0" + seconds) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (hours > 9 ? hours : "0" + hours)
    );
  };

  const clearTimer = (initialSeconds) => {
    if (Ref.current) clearInterval(Ref.current);
    let totalSeconds = initialSeconds;

    const id = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(id);
        setTimer("00:00:00");
      } else {
        totalSeconds -= 1;
        startTimer(totalSeconds);
      }
    }, 1000);

    Ref.current = id;
  };

  useEffect(() => {
    const hours = 18;
    const minutes = 13;
    const seconds = 40;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    startTimer(totalSeconds);
    clearTimer(totalSeconds);

    return () => clearInterval(Ref.current);
  }, []);

  const labels = ["ثانیه", "دقیقه", "ساعت"];

  return (
    <div className="flex items-center justify-center gap-3 text-l font-medium text-gray-800">
      {timer.split(":").map((part, index) => (
        <div key={index} className="flex items-center gap-1">
          <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl px-3 py-1 shadow-sm min-w-10]">
            <span className="text-2xl font-semibold text-neutral-800">
              {toPersianDigits(part)}
            </span>
            <span className="text-sm text-gray-500">{labels[index]}</span>
          </div>
          {index < 2 && <span className="text-2xl text-gray-600">:</span>}
        </div>
      ))}
    </div>
  );
}

export default Timer;
