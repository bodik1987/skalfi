import { useState } from "react";

export default function Totals() {
  const [activeTab, setActiveTab] = useState("0");
  return (
    <section>
      <div className="bg-app-green w-full pt-4 shadow-md">
        <h2 className="text-center text-white">Podsumowania</h2>

        <div className="mt-2 flex justify-around">
          <button
            onClick={() => setActiveTab("0")}
            className={`${
              activeTab === "0" && "opacity-100 border-b-white"
            } pb-2 cursor-pointer border-b-2 border-b-transparent opacity-80 text-white w-full`}
          >
            Dzienne
          </button>
          <button
            onClick={() => setActiveTab("1")}
            className={`${
              activeTab === "1" && "opacity-100 border-b-white"
            } pb-2 cursor-pointer border-b-2 border-b-transparent opacity-80 text-white w-full`}
          >
            Miseczne
          </button>
        </div>
      </div>

      <p>Дневные, месячные</p>
      <p>Слайдер</p>
      <p>Данные</p>
    </section>
  );
}
