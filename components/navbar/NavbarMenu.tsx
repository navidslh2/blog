import { navbar } from '@/lib/data'
import { IoIosArrowDown } from "react-icons/io";

const NavbarMenu = () => {
  return (
        <ul className="flex items-center gap-5">
          {navbar.map((item) =>
            item.children ? (
              <li key={item.title} className="group relative flex items-center">
                {item.title}
                <IoIosArrowDown />
                <ul className="hidden absolute top-6 group-hover:flex group-hover:flex-col gap-2 p-2 w-30">
                  {item.children.map((ch) => (
                    <li>{ch.title}</li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.title}>{item.title}</li>
            )
          )}
        </ul>
  )
}

export default NavbarMenu
