import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import useCheckConnection from "../hooks/useCheckConnection";
import Burger from "./burger";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  const { pathname } = useLocation();
  const isOnline = useCheckConnection();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    const setViewportHeight = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setViewportHeight();
    window.visualViewport?.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
    };
  }, []);

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
      <section
        className="flex flex-col"
        style={{ height: `calc(var(--vh, 1vh) * 100)` }}
      >
        <Header onOpen={() => setIsBurgerOpen(true)} />
        <section className={`${bgColor} flex-1 overflow-auto`}>
          <Outlet />
        </section>
        <Footer />
      </section>
    </>
  );
}
