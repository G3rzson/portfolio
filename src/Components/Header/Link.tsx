import { type ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  path: string;
};

export default function Link({ children, path }: LinkProps) {
  return (
    <a
      href={path}
      className="hover:text-blue-500 duration-500 px-4 pb-4 sm:py-4"
    >
      {children}
    </a>
  );
}
