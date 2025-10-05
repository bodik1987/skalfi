import { NavLink } from "react-router";
import { DocsIcon, HomeIcon, ScheduleIcon, TotalsIcon } from "./icons";

export default function Footer() {
  const baseClasses = "footer-button";
  const activeClasses = "bg-app-green";
  const inactiveClasses = "";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  return (
    <footer className="h-full bg-white border-t">
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
        <NavLink to="/totals" className={getLinkClass}>
          <TotalsIcon />
        </NavLink>
      </div>
    </footer>
  );
}
