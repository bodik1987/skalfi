import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import useCheckConnection from "../hooks/useCheckConnection";
import Burger from "./burger";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  const location = useLocation();

  const isOnline = useCheckConnection();

  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const handleOpen = () => {
    setBurgerOpen(true);
  };

  const handleClose = () => {
    setBurgerOpen(false);
  };

  return (
    <>
      <Burger open={isBurgerOpen} onClose={handleClose} />

      {isOnline ? (
        <section className="grid grid-rows-[auto_1fr] min-h-dvh">
          <Header onOpen={handleOpen} />
          <section
            className={`${
              location.pathname !== "/" && location.pathname !== "/schedule"
                ? "bg-[#E0E0E0]"
                : "bg-app-gray"
            }`}
          >
            <div className="wrapper">
              <Outlet />
            </div>
          </section>
          <Footer />
        </section>
      ) : (
        <section className="fixed inset-0 bg-app-gray text-white z-[999] flex items-center justify-center">
          Błąd wczytywania. Połącz się z Internetem.
        </section>
      )}
    </>
  );
}
