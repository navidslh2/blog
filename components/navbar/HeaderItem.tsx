import { navbar } from "@/lib/data";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const HeaderItem = () => {
  return (
    <ul className="flex items-center gap-10 cursor-pointer">
      {navbar.map((item) =>
        item.children ? (
          <li
            key={item.title}
            className="flex items-center group relative border-b-2 border-transparent hover:text-blue-600  hoverEffect  hover:border-b-2 hover:border-blue-600 h-15"
          >
            {item.title}
            <IoIosArrowDown />
            <ul className="hidden absolute bg-white top-15 pt-5  group-hover:flex flex-col items-start justify-center gap-2 p-2 w-30 shadow-md rounded-sm z-0">
              {item.children.map((ch) => (
                <li
                  key={ch.title}
                  className="text-black hover:text-blue-600 hoverEffect"
                >
                  <Link href={ch.href}>
                  {ch.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            key={item.title}
            className="flex items-center hover:text-blue-600 border-b-2 border-transparent hoverEffect hover:border-b-2 hover:border-blue-600 h-15"
          >
            <Link  href={item.href}>{item.title}</Link>
          </li>
        )
      )}
    </ul>
  );
};

export default HeaderItem;
