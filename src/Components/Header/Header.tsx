import { useState } from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import Navigation from "./Navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  return (
    <header className="bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 fixed w-full z-10">
      <div className="flex items-center justify-between flex-col sm:flex-row w-full sm:w-4/5 mx-0 sm:mx-auto">
        {/* Logó */}
        <Logo />

        {/* Hamburger gomb */}
        <HamburgerMenu
          open={open}
          setOpen={setOpen}
          setFirstLoad={setFirstLoad}
        />

        {/* Navigáció */}
        <Navigation open={open} firstLoad={firstLoad} />
      </div>
    </header>
  );
}
