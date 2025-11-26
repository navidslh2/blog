"use client";
import { navbar } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MobileHeaderItem = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e:MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul className="flex flex-col items-center gap-1 cursor-pointer">
      {navbar.map((item) =>
        item.children ? (
          <li
            key={item.title}
            className="flex items-center  relative  hover:text-blue-600  hoverEffect  hover:border-b-2 hover:border-blue-600 h-15"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            ref={dropdownRef}
          >
            {item.title}
            <IoIosArrowDown />
            <ul
              className={cn(
                " absolute bg-white top-15 pt-5  flex-col items-start justify-center gap-2 p-2 w-30 shadow-md rounded-sm",
                isDropdownOpen ? "flex" : "hidden"
              )}
            >
              {item.children.map((ch) => (
                <li
                  key={ch.title}
                  className="text-black hover:text-blue-600 hoverEffect"
                >
                  {ch.title}
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            key={item.title}
            className="flex items-center hover:text-blue-600 hoverEffect hover:border-b-2 hover:border-blue-600 h-15"
          >
            {item.title}
          </li>
        )
      )}
    </ul>
  );
};

export default MobileHeaderItem;
