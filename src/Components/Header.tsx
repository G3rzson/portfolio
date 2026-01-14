import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MEDIA_SRC_LINKS, NAV_LINKS } from "../Constants/Constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  return (
    <header className="bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 w-full fixed top-0 z-10">
      <div className="flex items-center justify-between flex-col sm:flex-row w-full sm:w-4/5 mx-0 sm:mx-auto">
        {/* Logó */}
        <a
          href="#aboutme"
          className="flex items-center justify-center gap-2 p-4"
        >
          <img
            src={MEDIA_SRC_LINKS.logo.src}
            alt={MEDIA_SRC_LINKS.logo.alt}
            className="h-10 w-auto"
          />
          <span className="font-semibold dark:hover:text-cyan-400 hover:text-cyan-600 duration-300">
            Portfólióm
          </span>
        </a>

        {/* Hamburger gomb */}
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

        {/* Navigáció */}
        <nav
          className={`${
            firstLoad ? "hide" : open ? "nav-open" : "nav-closed"
          } flex justify-center items-center flex-col sm:flex-row`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="p-4 dark:hover:text-cyan-400 hover:text-cyan-600 duration-300"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
