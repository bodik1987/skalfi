import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import useCheckConnection from "../hooks/useCheckConnection";
import Burger from "./burger";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  const { pathname } = useLocation();
  const isOnline = useCheckConnection();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  if (!isOnline) {
    return (
      <section className="fixed inset-0 bg-app-gray text-white z-[999] flex items-center justify-center">
        Błąd wczytywania. Połącz się z Internetem.
      </section>
    );
  }

  const bgColor =
    pathname !== "/" && pathname !== "/schedule"
      ? "bg-[#E0E0E0]"
      : "bg-app-gray";

  return (
    <>
      <Burger open={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />
      <section className="grid grid-rows-[auto_1fr] min-h-screen">
        <Header onOpen={() => setIsBurgerOpen(true)} />
        <section className={`${bgColor} h-full`}>
          <Outlet />
        </section>
        <Footer />
      </section>
    </>
  );
}
