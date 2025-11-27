import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

interface Props {
    isMobileMenuOpen:boolean,
    MobileMenuHandler:()=> void
}
const Backdrop = ({isMobileMenuOpen, MobileMenuHandler}: Props) => {
  return (
<AnimatePresence>
      {isMobileMenuOpen && <motion.div className="fixed inset-0 w-screen h-screen hoverEffect bg-gray-900/70 backdrop-blur-xs" 
      onClick={MobileMenuHandler} 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration:0.2, ease: "easeInOut"}}
      />}
    </AnimatePresence>
  )
}

export default Backdrop
