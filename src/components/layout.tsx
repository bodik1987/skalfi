import { useState } from "react";
import { Outlet } from "react-router";
import Burger from "./burger";
import Header from "./header";
import Footer from "./footer";
import useCheckConnection from "../hooks/useCheckConnection";

export default function Layout() {
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
        <section className="grid grid-rows-[48px_1fr_60px] min-h-dvh">
          <Header onOpen={handleOpen} />
          <section className="bg-app-gray">
            <div className="wrapper p-2">
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
