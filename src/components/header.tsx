import { useState } from "react";
import { useLocation } from "react-router";
import { BurgerIcon, MessegesIcon } from "./icons";

type HeaderProps = {
  onOpen: () => void;
};

export default function Header({ onOpen }: HeaderProps) {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isGreen = pathname === "/docs" || pathname === "/schedule";

  const toggleModal = () => setIsModalOpen((v) => !v);

  return (
    <>
      <header
        className={`sticky top-0 z-10 ${
          isGreen ? "bg-app-green" : "bg-app-gray"
        }`}
      >
        <div className="wrapper flex justify-between items-center p-2 md:px-0">
          <button
            onClick={onOpen}
            className={`header-button ${isGreen && "!text-white"}`}
            aria-label="Menu"
          >
            <BurgerIcon />
          </button>

          <h2 className="text-white">
            {pathname === "/docs" && "Wnioski"}
            {pathname === "/schedule" && "Harmonogram"}
          </h2>

          <button
            onClick={toggleModal}
            className={`header-button ${isGreen && "!text-white"}`}
            aria-label="Messages"
          >
            <MessegesIcon />
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-4 text-gray-500"
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Wiadomości</h2>
            <p>Brak wiadomości</p>
          </div>
        </div>
      )}
    </>
  );
}
