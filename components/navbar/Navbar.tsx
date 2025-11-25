import Logo from "@/ui/Logo";
import NavbarMenu from "./NavbarMenu";


const Navbar = () => {
  return (
    <div className="bg-white fixed p-2 w-screen h-20 flex items-center">
      <div className="flex items-center gap-10">
        <Logo />
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
