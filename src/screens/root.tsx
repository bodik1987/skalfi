import { useState } from "react";
import { ChevronsUpIcon } from "../components/icons";
import { useDateStore, useUserStore } from "../store";
import CircularTimer from "../components/circular-timer";
import WeekCarousel from "../components/week-carousel";

export default function Root() {
  const { user, loading } = useUserStore();
  const [expanded, setExpanded] = useState(false);
  const { selectedDate } = useDateStore();

  // функция форматирования даты DD-MM-YYYY
  const formatDate = (date: Date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}-${m}-${y}`;
  };

  const formattedDate = selectedDate ? formatDate(selectedDate) : "";
  const isFreeDay = user?.freeDays?.includes(formattedDate);

  return (
    <div className="flex flex-col items-center">
      <div className="wrapper">
        {loading ? (
          <div className="w-full text-gray-500 animate-pulse">Loading...</div>
        ) : (
          <div className="mt-6 text-white">
            <CircularTimer />
            <WeekCarousel />
          </div>
        )}

        <div className="wrapper fixed bottom-[60px] inset-x-0 px-4 py-4 bg-app-green text-white rounded-t-2xl w-full z-10">
          <div className="flex gap-4 pb-4 justify-between items-start">
            {expanded ? (
              <h2>Wymiar urlopu 2025</h2>
            ) : (
              <div className="text-left">
                <h2>Statystyka</h2>
                <p className="font-semibold">{formattedDate}</p>
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-white text-app-green rounded-2xl h-8 px-6 cursor-pointer"
            >
              <div className={`${expanded && "rotate-180"}`}>
                <ChevronsUpIcon />
              </div>
            </button>
          </div>

          {expanded ? (
            <div className="flex flex-col gap-4">
              {/* ... блоки urlopu без изменений ... */}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="opacity-80">Godziny rozpoczęcia</p>
                <p className="text-lg font-semibold bg-white/20 min-w-16 text-center px-3 py-0.5 rounded-2xl">
                  {isFreeDay ? "Wolne" : "6:00"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-80">Godziny zakonczenia</p>
                <p className="text-lg font-semibold bg-black/20 min-w-16 text-center px-3 py-0.5 rounded-2xl">
                  {isFreeDay ? "Wolne" : "14:00"}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-80">Godziny pracy</p>
                <p className="text-lg font-semibold">
                  {isFreeDay ? "-" : "8:00"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
