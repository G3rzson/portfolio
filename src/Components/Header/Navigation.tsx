import Link from "./Link";

type NavigationProps = {
  open: boolean;
  firstLoad: boolean;
};

export default function Navigation({ open, firstLoad }: NavigationProps) {
  return (
    <nav
      className={`${
        firstLoad ? "hide" : open ? "nav-open" : "nav-closed"
      } flex justify-center items-center flex-col sm:flex-row`}
    >
      <Link path="#aboutme">Rólam</Link>
      <Link path="#skills">Készségeim</Link>
      <Link path="#projects">Projektek</Link>
      <Link path="#contacts">Kapcsolatok</Link>
    </nav>
  );
}
