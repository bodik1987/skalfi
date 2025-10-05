import { BurgerIcon } from "./icons";

type HeaderProps = { onOpen: () => void };

export default function Header({ onOpen }: HeaderProps) {
  return (
    <header className="bg-app-gray sticky top-0 z-10 flex items-center gap-2">
      <div className="wrapper flex justify-between items-center p-2 md:px-0">
        <button
          onClick={() => {
            onOpen();
          }}
          className="w-12 text-app-green active:scale-95 transition-transform aspect-square z-10 cursor-pointer"
          aria-label="Menu"
        >
          <BurgerIcon />
        </button>
        <div className="flex items-center gap-4">Left</div>
      </div>
    </header>
  );
}
