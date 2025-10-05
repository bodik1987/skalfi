import { useState } from "react";
import { ChevronsUpIcon } from "../components/icons";
import { useUserStore } from "../store";

export default function Root() {
  const { user, loading } = useUserStore();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="wrapper">
        {loading ? (
          <div className="w-full text-gray-500 animate-pulse">Loading...</div>
        ) : (
          <div className="text-white">
            <p>Диаграмма круговая обратного отчета</p>
            <p>Осталось до работы/конца</p>
            <p>Дата</p>
            <p>Карусель дат</p>
          </div>
        )}
        <div className="wrapper fixed bottom-[60px] inset-x-0 px-4 py-4 bg-app-green text-white rounded-t-2xl w-full z-10">
          <div className="flex gap-4 pb-4 justify-between items-start">
            {expanded ? (
              <h2>Wymiar urlopu 2025</h2>
            ) : (
              <div className="text-left">
                <h2>Statystyka</h2>
                <p className="font-semibold">05.10.25</p>
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
              <div className="flex bg-white text-black p-2 rounded-md">
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

              <div className="flex bg-white text-black p-2 rounded-md">
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
                  6:00
                </p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-80">Godziny zakonczenia</p>
                <p className="text-lg font-semibold bg-black/20 min-w-16 text-center px-3 py-0.5 rounded-2xl">
                  Wolne
                </p>
              </div>
              <div className="flex justify-between">
                <p className="opacity-80">Godziny pracy</p>
                <p className="text-lg font-semibold">8:00</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
