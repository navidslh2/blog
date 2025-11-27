"use client";
import { navbar } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MobileHeaderItem = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handelClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handelClickOutside);
    return () => document.removeEventListener("mousedown", handelClickOutside);
  }, []);

  return (
    <ul className="flex flex-col items-center gap-4 cursor-pointer ps-4 pt-5">
      {navbar.map((item) =>
        item.children ? (
          <li
            key={item.title}
            className="w-full h-10 flex items-center  relative  hover:text-blue-600  hoverEffect  hover:border-l-2 hover:border-blue-600"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            ref={dropdownRef}
          >
            {item.title}
            <IoIosArrowDown />
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  className=" absolute top-12 flex flex-col items-start justify-center gap-1.5 origin-top"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {item.children.map((ch) => (
                    <motion.li
                      key={ch.title}
                      className="text-black flex items-center hover:text-blue-600 hoverEffect border-r border-gray-600 ps-3 h-8 hover:border-blue-600 origin-top"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {ch.title}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ) : (
          <li
            key={item.title}
            className="w-full h-10 flex items-center hover:text-blue-600 hoverEffect hover:border-l-2 hover:border-blue-600"
          >
            {item.title}
          </li>
        )
      )}
    </ul>
  );
};

export default MobileHeaderItem;
