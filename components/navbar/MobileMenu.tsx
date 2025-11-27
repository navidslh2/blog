import Logo from "@/ui/Logo";
import MobileHeaderItem from "./MobileHeaderItem";
import { AnimatePresence, motion } from "motion/react";

const MobileMenu = () => {
  return (
    <AnimatePresence>
      <motion.div className="fixed bg-white h-screen top-0 right-0 w-40 pt-10 z-10 origin-right"
      initial={{scaleX: 0}}
      animate={{scaleX:1}}
      exit={{scaleX:0}}
      transition={{duration:0.5, ease: 'easeInOut'}}
      >
        <div className="flex flex-col">
          <div className="m-auto mb-5">
            <Logo />
          </div>
          <MobileHeaderItem />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
