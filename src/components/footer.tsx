import { NavLink } from "react-router";
import { DocsIcon, HomeIcon, ScheduleIcon, TotalsIcon } from "./icons";

export default function Footer() {
  const baseClasses = "footer-button";
  const activeClasses = "bg-app-green !text-white";
  const inactiveClasses = "";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  return (
    <footer className="fixed bottom-0 inset-x-0 h-[60px] bg-white border-t z-10">
      <div className="wrapper h-full flex justify-around items-center p-2">
        <NavLink to="/schedule" className={getLinkClass}>
          <ScheduleIcon />
        </NavLink>
        <NavLink to="/" className={getLinkClass}>
          <HomeIcon />
        </NavLink>
        <NavLink to="/docs" className={getLinkClass}>
          <DocsIcon />
        </NavLink>
      </div>
    </footer>
  );
}
