import { useState, useEffect } from "react";
import { ref, onValue, query, set } from "firebase/database";
import { REALTIME_DATABASE, RD_PROJECT_NAME } from "../../firebase";
import { Outlet } from "react-router";
import useCheckConnection from "../hooks/useCheckConnection";
import Burger from "./burger";
import Header from "./header";
import Footer from "./footer";
import { useUserStore } from "../store";
import type { IUser } from "../types";

export default function Layout() {
  const isOnline = useCheckConnection();

  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const handleOpen = () => {
    setBurgerOpen(true);
  };

  const handleClose = () => {
    setBurgerOpen(false);
  };

  const { setUser, setLoading } = useUserStore();

  const newUser: IUser = {
    id: "66524",
    name: "Bohdan Shulika",
    startDate: "15-09-25",
    firm: { title: "Correct", section: "WPSP2", position: "Operator maszyn" },
    docs: [],
    vocationHours: 56,
    vocationChildrenHours: 2,
  };

  // CREATE
  function createUser() {
    set(ref(REALTIME_DATABASE, RD_PROJECT_NAME + newUser.id), newUser);
  }

  createUser();

  // READ
  useEffect(() => {
    try {
      const dbRef = query(ref(REALTIME_DATABASE, RD_PROJECT_NAME));
      setLoading(true);

      const unsubscribe = onValue(dbRef, (snapshot) => {
        let currentUser: IUser | null = null;

        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          currentUser = { ...childData, id: childKey };
        });

        setUser(currentUser);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [setUser, setLoading]);

  return (
    <>
      <Burger open={isBurgerOpen} onClose={handleClose} />

      {isOnline ? (
        <section className="grid grid-rows-[48px_1fr] pb-[60px] min-h-dvh">
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
