import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full h-[12.5rem] flex justify-center items-center bg-gray-700">
      <Logo />
    </header>
  );
}
