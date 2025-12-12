"use client";
import Logo from "@/ui/Logo";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderItem from "./HeaderItem";
import MobileMenu from "./MobileMenu";
import Backdrop from "@/ui/Backdrop";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      <div className="bg-yellow-400 fixed flex items-center justify-between py-2 w-screen h-15  shadow-lg px-4 md:px-10 xl:px-30 z-1">
        <GiHamburgerMenu
          size={20}
          className="md:hidden text-black  hover:text-blue-400 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        />
        <Logo />
        <div className="hidden md:flex  items-center justify-between">
          <HeaderItem />
        </div>
        <div className="cursor-pointer">
          <CiSearch size={22} />
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu />}
      <div className="z-5">
        <Backdrop
          isMobileMenuOpen={isMobileMenuOpen}
          MobileMenuHandler={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Navbar;
