import { useState } from "react";
import { Outlet } from "react-router";
import Burger from "./burger";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
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

      <section className="grid grid-rows-[48px_1fr_60px] min-h-dvh">
        <Header onOpen={handleOpen} />
        <section className="bg-app-gray">
          <div className="wrapper p-2">
            <Outlet />
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
