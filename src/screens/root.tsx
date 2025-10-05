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
          <div className="grid gap-4">
            <div className="bg-white shadow p-2 border border-gray-200">
              <h2 className="font-semibold text-lg">{user?.name}</h2>
            </div>
          </div>
        )}
        <div className="wrapper fixed bottom-[60px] inset-x-0 px-4 py-4 bg-app-green text-white rounded-t-2xl w-full z-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="block bg-white text-app-green rounded-2xl h-8 px-6 cursor-pointer mx-auto"
          >
            <div className={`${expanded && "rotate-180"}`}>
              <ChevronsUpIcon />
            </div>
          </button>

          {expanded ? (
            <div>
              <h2 className="mt-2 text-center">Wymiar urlopu 2025</h2>

              <div className="mt-4 flex bg-white text-black p-2 rounded-md">
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

              <div className="mt-4 flex bg-white text-black p-2 rounded-md">
                <p className="font-semibold">Urlop opieka nad dziecom</p>
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
            <div className="flex justify-between">
              <h2>Statystyka</h2>
              <p>05.10.25</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
