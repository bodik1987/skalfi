import { useState } from "react";
import { NavLink } from "react-router";
import { Drawer } from "vaul";
import { AppInfoIcon, DocsIcon, ExitIcon, UserIcon } from "./icons";
import { user } from "../seed";

type BurgerProps = { open: boolean; onClose: () => void };

export default function Burger({ open, onClose }: BurgerProps) {
  const [logoutModal, setLogoutModal] = useState(false);

  const baseClasses = "burger-button";
  const activeClasses = "bg-app-green !text-white";
  const inactiveClasses = "";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <>
      <Drawer.Root open={open} onClose={onClose} direction="left">
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-20" />
        <Drawer.Content className="bg-white fixed z-30 inset-y-0 w-fit outline-none overflow-hidden">
          <Drawer.Title />
          <Drawer.Description />

          <div>
            <div className="bg-app-green px-4 py-6 text-white">{user.name}</div>

            <div className="flex flex-col gap-2 p-2 pr-4">
              <NavLink
                to="/user_info"
                className={getLinkClass}
                onClick={onClose}
              >
                <UserIcon />
                <span>Informacje o uzytowniku</span>
              </NavLink>
              <NavLink to="/docs" className={getLinkClass} onClick={onClose}>
                <DocsIcon />
                <span>Wnioski</span>
              </NavLink>
              <NavLink
                to="/app_info"
                className="burger-button"
                onClick={onClose}
              >
                <AppInfoIcon />
                <span>Informacje o aplikacji</span>
              </NavLink>
              <button
                className="burger-button flex items-center gap-2"
                onClick={() => setLogoutModal(true)}
              >
                <ExitIcon />
                <span>Wyloguj sie</span>
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Root>

      {logoutModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setLogoutModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLogoutModal(false)}
              className="absolute top-2 right-4 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Wyloguj się</h2>
            <p>Czy na pewno chcesz się wylogować?</p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setLogoutModal(false)}
              >
                Anuluj
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => {
                  // Здесь можно вызвать логику выхода
                  setLogoutModal(false);
                }}
              >
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
