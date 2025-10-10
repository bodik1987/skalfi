import { useState } from "react";
import { ClockIcon } from "../components/icons";
import { user } from "../seed";

export default function Docs() {
  const [activeTab, setActiveTab] = useState("0");

  function formatDate(date: string | Date) {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <>
      <div className="bg-app-green w-full shadow-md">
        <div className="wrapper flex justify-around">
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

      <div className="wrapper mt-3 px-3 flex flex-col gap-4">
        {user?.docs
          ?.filter((doc) =>
            activeTab === "0" ? doc.type === "vacation" : doc.type === "time"
          )
          .map((doc) => (
            <div key={doc.id}>
              <div className="flex justify-between bg-app-green text-white rounded-t-xl p-3">
                <p className="text-lg font-semibold">
                  {doc.type === "time" ? "Godziny pracy" : "Urlopowe"}
                </p>
                <span className="bg-[#E1F8D0] text-[#7AB550] px-4 py-1 rounded-full">
                  {doc.status === "confirmed" ? "Wprowadzono" : "Zatwierdzono"}
                </span>
              </div>
              <div className="bg-app-gray text-white p-4 rounded-b-xl flex flex-col gap-3">
                <div className="flex justify-between">
                  <p>Data utworzenia</p>
                  <span>{formatDate(doc.dateOfGeneration)}</span>
                </div>
                <div className="flex justify-between">
                  <p>Data rozpoczęcia</p>
                  <span className="bg-app-green px-3 py-1 rounded-full">
                    {formatDate(doc.dateOfBegin)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p>Data zakończenia</p>
                  <span className="bg-[#EC0062] px-3 py-1 rounded-full">
                    {formatDate(doc.dateOfEnd)}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
