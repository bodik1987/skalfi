import { useEffect, useState } from "react";
import { useDateStore } from "../store";
import { user } from "../seed";

export default function CircularTimer() {
  const [progress, setProgress] = useState(0);
  const { selectedDate } = useDateStore();

  useEffect(() => {
    const duration = 5000; // время анимации (мс)
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const value = Math.min((elapsed / duration) * 100, 100);
      setProgress(value);
      if (value < 100) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const radius = 130;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  // формат даты DD-MM-YYYY
  function formatDate(date: Date) {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}-${m}-${y}`;
  }

  const formatted = formatDate(selectedDate);
  const isFreeDay = user.freeDays?.includes(formatted);

  return (
    <div className="mt-10 flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="-rotate-90">
        <circle
          stroke="#111"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={isFreeDay ? "#F87171" : "#1BB396"} // 🔴 красная обводка в выходной
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={offset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-75"
        />
      </svg>

      <div className="absolute flex flex-col items-center text-white">
        {isFreeDay ? (
          <>
            <span className="text-3xl font-semibold text-red-400">Wolne</span>
            <span className="text-lg text-gray-400">{formatted}</span>
          </>
        ) : (
          <>
            <span className="text-3xl font-semibold">08:00:00</span>
            <span className="text-lg text-gray-300">{formatted}</span>
          </>
        )}
      </div>
    </div>
  );
}
