import { BurgerIcon, MessegesIcon } from "./icons";

type HeaderProps = { onOpen: () => void };

export default function Header({ onOpen }: HeaderProps) {
  return (
    <header className="bg-app-gray sticky top-0 z-10 flex items-center gap-2">
      <div className="wrapper flex justify-between items-center p-2 md:px-0">
        <button
          onClick={() => {
            onOpen();
          }}
          className="header-button"
          aria-label="Menu"
        >
          <BurgerIcon />
        </button>
        <div className="flex items-center gap-4">
          <button className="header-button">
            <MessegesIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
