import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDateStore } from "../store";

const dayNames = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];

function formatDate(date: Date) {
  return date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function WeekCarousel() {
  const { selectedDate, setSelectedDate } = useDateStore();
  const [direction, setDirection] = useState<1 | -1>(1);

  const paginate = (newDirection: 1 | -1) => {
    setDirection(newDirection);
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + newDirection);
    setSelectedDate(newDate);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div className="relative flex items-center justify-center w-full h-48 overflow-hidden text-white">
      <AnimatePresence custom={direction}>
        <motion.div
          key={selectedDate.toDateString()}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) > 80 || Math.abs(velocity.x) > 200;
            if (swipe) paginate(offset.x < 0 ? 1 : -1);
          }}
          className="absolute flex w-full items-center justify-center"
        >
          {/* Wczoraj */}
          <div className="w-[10%] text-center opacity-60 scale-90">
            <div className="text-sm">
              {dayNames[new Date(selectedDate.getTime() - 86400000).getDay()]}
            </div>
            <div className="text-xs text-gray-400">
              {formatDate(new Date(selectedDate.getTime() - 86400000))}
            </div>
          </div>

          {/* Dzisiaj */}
          <div className="w-[80%] text-center">
            <div className="text-2xl font-semibold">
              {dayNames[selectedDate.getDay()]}
            </div>
            <div className="text-sm text-gray-300">
              {formatDate(selectedDate)}
            </div>
          </div>

          {/* Jutro */}
          <div className="w-[10%] text-center opacity-60 scale-90">
            <div className="text-sm">
              {dayNames[new Date(selectedDate.getTime() + 86400000).getDay()]}
            </div>
            <div className="text-xs text-gray-400">
              {formatDate(new Date(selectedDate.getTime() + 86400000))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
