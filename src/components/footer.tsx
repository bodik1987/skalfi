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
    <footer className="fixed bottom-0 inset-x-0 h-[60px] bg-white border-t z-10">
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
