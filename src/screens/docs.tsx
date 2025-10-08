import { useState } from "react";
import { ClockIcon } from "../components/icons";

export default function Docs() {
  const [activeTab, setActiveTab] = useState("0");
  return (
    <section>
      <div className="bg-app-green w-full pt-4 shadow-md">
        <h2 className="text-center text-white">Wnioski</h2>

        <div className="mt-2 flex justify-around">
          <button
            onClick={() => setActiveTab("0")}
            className={`${
              activeTab === "0" && "opacity-100 border-b-white"
            } pb-1 cursor-pointer border-b-2 border-b-transparent opacity-80 flex flex-col items-center justify-center text-white w-full`}
          >
            <ClockIcon />
            <span>Urlopowe</span>
          </button>
          <button
            onClick={() => setActiveTab("1")}
            className={`${
              activeTab === "1" && "opacity-100 border-b-white"
            } pb-1 cursor-pointer border-b-2 border-b-transparent opacity-80 flex flex-col items-center justify-center text-white w-full`}
          >
            <ClockIcon />
            <span>Godzinowe</span>
          </button>
        </div>
      </div>

      <p>Фильтр дат</p>
      <p>Список доков</p>
      <p>Кнопка создания нового</p>
    </section>
  );
}
