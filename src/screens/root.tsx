import { useState } from "react";
import { ChevronsUpIcon } from "../components/icons";
import { useDateStore } from "../store";
import CircularTimer from "../components/circular-timer";
import WeekCarousel from "../components/week-carousel";
import { user } from "../seed";

export default function Root() {
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
  const isFreeDay = user.freeDays?.includes(formattedDate);

  return (
    <div className="wrapper h-full flex flex-col">
      <CircularTimer />

      <div className="mt-auto">
        <WeekCarousel />
        <div className="bottom-panel">
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
              <div className="flex justify-between bg-white text-black p-2 rounded-md">
                <p className="font-semibold">Urlop wypoczynkowy</p>
                <div className="flex gap-2 ml-2">
                  <div>
                    <p className="text-sm">Wymiar</p>
                    <p className="font-semibold text-right">
                      {user?.vocationHours[0]}
                    </p>
                  </div>
                  <div className="border-x border-gray-400 px-2">
                    <p className="text-sm">Pozostalo</p>
                    <p className="font-semibold text-right">
                      {user?.vocationHours[1]}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">Jednostka</p>
                    <p className="font-semibold text-right">godziny</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between bg-white text-black p-2 rounded-md">
                <p className="font-semibold">Urlop opieka nad dziec.</p>
                <div className="flex gap-2 ml-2">
                  <div>
                    <p className="text-sm">Wymiar</p>
                    <p className="font-semibold text-right">
                      {user?.vocationChildrenDays[0]}
                    </p>
                  </div>
                  <div className="border-x border-gray-400 px-2">
                    <p className="text-sm">Pozostalo</p>
                    <p className="font-semibold text-right">
                      {user?.vocationChildrenDays[1]}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm">Jednostka</p>
                    <p className="font-semibold text-right">dni</p>
                  </div>
                </div>
              </div>
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
