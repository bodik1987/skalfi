import { NavLink } from "react-router";
import { DocsIcon, HomeIcon, ScheduleIcon } from "./icons";

export default function Footer() {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `footer-button ${isActive ? "bg-app-green !text-white" : ""}`;

  const links = [
    { to: "/schedule", icon: <ScheduleIcon /> },
    { to: "/", icon: <HomeIcon /> },
    { to: "/docs", icon: <DocsIcon /> },
  ];

  return (
    <footer className="h-16 bg-white border-t">
      <div className="wrapper h-full flex justify-around items-center p-2">
        {links.map(({ to, icon }) => (
          <NavLink key={to} to={to} className={getLinkClass}>
            {icon}
          </NavLink>
        ))}
      </div>
    </footer>
  );
}
