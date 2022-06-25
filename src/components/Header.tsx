import { Logo } from "./Logo";

const Header = () => {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray1-600 border-b border-gray1-500">
      <Logo />
    </header>
  );
};

export default Header;
