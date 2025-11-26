import Logo from "@/ui/Logo";
import MobileHeaderItem from "./MobileHeaderItem";

const MobileMenu = () => {
  return (
    <div className="fixed bg-red-400 h-screen top-0 right-0 w-40 pt-10">
      <div className="flex flex-col">
        <div className="m-auto mb-5">
          <Logo />
        </div>
        <MobileHeaderItem />
      </div>
    </div>
  );
};

export default MobileMenu;
