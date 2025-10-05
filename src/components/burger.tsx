import { NavLink } from "react-router";
import { Drawer } from "vaul";
import { BurgerIcon, DocsIcon, MoneyIcon, UserIcon } from "./icons";

type BurgerProps = { open: boolean; onClose: () => void };

export default function Burger({ open, onClose }: BurgerProps) {
  const baseClasses = "burger-button";
  const activeClasses = "bg-app-green !text-white";
  const inactiveClasses = "";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <Drawer.Root open={open} onClose={onClose} direction="left">
      <Drawer.Overlay className="fixed inset-0 bg-black/40 z-20" />

      <Drawer.Content className="bg-white fixed z-30 inset-y-0 w-fit outline-none overflow-hidden">
        <Drawer.Title />
        <Drawer.Description />

        <div>
          <div className="bg-app-green px-4 py-6 text-white">User</div>

          <div className="flex flex-col gap-2 p-2 pr-4">
            <button className="burger-button">
              <UserIcon />
              <span>Informacje ob uzytowniku</span>
            </button>
            <NavLink to="/docs" className={getLinkClass} onClick={onClose}>
              <DocsIcon />
              <span>Wnioski</span>
            </NavLink>
            <NavLink to="/money" className={getLinkClass} onClick={onClose}>
              <MoneyIcon />
              <span>Premie</span>
            </NavLink>

            <NavLink to="/" className="burger-button" onClick={onClose}>
              <BurgerIcon />
              <span>Wyloguj sie</span>
            </NavLink>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}
