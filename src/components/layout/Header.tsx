import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <header className="relative z-[99] hidden sm:block">
        <DesktopNav />
      </header>
      <header className="relative z-[99] sm:hidden">
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
