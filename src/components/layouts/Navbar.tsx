import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from 'motion/react';

function Navbar() {
  return (
    <motion.header className="h-16 fixed w-full bg-white z-[999]"
    initial={{opacity : 0}}
    animate ={ {opacity : 1}}
    transition={{delay : 1, duration : 1}}
    >
      <nav className="w-full max-w-[1230px] h-full px-5 flex justify-between items-center mx-auto">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navbar;
