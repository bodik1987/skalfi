import { useState } from "react";
import { useLocation } from "react-router";
import { BurgerIcon, MessegesIcon } from "./icons";

type HeaderProps = { onOpen: () => void };

export default function Header({ onOpen }: HeaderProps) {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header
        className={`${
          location.pathname !== "/" ? "bg-app-green" : "bg-app-gray"
        } sticky top-0 z-10 flex items-center gap-2`}
      >
        {location.pathname === "/" && (
          <div className="wrapper flex justify-between items-center p-2 md:px-0">
            <button
              onClick={() => onOpen()}
              className="header-button"
              aria-label="Menu"
            >
              <BurgerIcon />
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="header-button"
                aria-label="Messages"
              >
                <MessegesIcon />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Модалка */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)} // клик по подложке закрывает модалку
        >
          <div
            className="bg-white rounded-lg p-6 w-80 relative"
            onClick={(e) => e.stopPropagation()} // клик внутри модалки не закрывает
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-4 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Wiadomości</h2>
            <p>Modal...</p>
          </div>
        </div>
      )}
    </>
  );
}
