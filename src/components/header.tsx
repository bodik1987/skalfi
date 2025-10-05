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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
        <div className="flex items-center gap-4">Left</div>
      </div>
    </header>
  );
}
