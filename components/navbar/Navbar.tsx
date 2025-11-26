'use client'
import Logo from "@/ui/Logo";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderItem from "./HeaderItem";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  return (
    <header className="bg-white fixed flex items-center justify-between p-2 w-screen h-15 flex items-center shadow-lg px-5 md:px-30 relative">
      <GiHamburgerMenu
        className="md:hidden text-black  hover:text-blue-400 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      <Logo />
      <div className="hidden md:flex  items-center">
        <HeaderItem />
      </div>
      <div className="cursor-pointer">
        <CiSearch size={23} />
      </div>
      {isMobileMenuOpen && (
        <MobileMenu />
      )}
    </header>
  );
};

export default Navbar;
