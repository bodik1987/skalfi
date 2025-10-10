import { NavLink } from "react-router";
import { Drawer } from "vaul";
import { DocsIcon, UserIcon } from "./icons";
import { user } from "../seed";

type BurgerProps = {
  open: boolean;
  onClose: () => void;
};

export default function Burger({ open, onClose }: BurgerProps) {
  const linkBase = "burger-button";
  const linkActive = "bg-app-green !text-white";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? linkActive : ""}`;

  const links = [
    { to: "/user_info", label: "Informacje o użytkowniku", icon: <UserIcon /> },
    { to: "/docs", label: "Wnioski", icon: <DocsIcon /> },
  ];

  return (
    <Drawer.Root open={open} onClose={onClose} direction="left">
      <Drawer.Overlay className="fixed inset-0 bg-black/40 z-20" />
      <Drawer.Content className="fixed inset-y-0 z-30 w-fit bg-white outline-none overflow-hidden">
        <div className="bg-app-green px-4 py-6 text-white">{user.name}</div>
        <nav className="flex flex-col gap-2 p-2 pr-4">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={getLinkClass}
              onClick={onClose}
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </Drawer.Content>
    </Drawer.Root>
  );
}
