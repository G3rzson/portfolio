import { Menu, X } from "lucide-react";

type HamburgerMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HamburgerMenu({
  open,
  setOpen,
  setFirstLoad,
}: HamburgerMenuProps) {
  return (
    <button
      onClick={() => {
        setOpen(!open);
        setFirstLoad(false);
      }}
      className="border-none outline-none absolute right-4 top-4 sm:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
    >
      <div
        className={`transform transition-transform duration-500 ${
          open ? "rotate-90" : "rotate-0"
        }`}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </div>
    </button>
  );
}
