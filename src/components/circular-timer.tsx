import { useEffect, useState } from "react";

export default function CircularTimer() {
  const [progress, setProgress] = useState(0);

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

  const radius = 100;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
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
          stroke="#1BB396"
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
        <span className="text-xl font-semibold">08:00:00</span>
        <span className="text-lg text-gray-300">2025-10-06</span>
      </div>
    </div>
  );
}
