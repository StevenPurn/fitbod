import Link from "next/link";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="h-[60px] bg-fitbod-blue w-full flex items-center pl-8">
      <Link href={"/"}>
        <Logo />
      </Link>
    </header>
  );
};

Header.displayName = "Header";
