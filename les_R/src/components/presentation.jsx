import logo from "../image/logo.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

const Presentation = () => {
  const [Moved, setMoved] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMoved(true);
    }, 3000);
  }, []);
  return Moved ? (
    <Navbar></Navbar>
  ) : (
    <motion.div className="w-[100%] h-[100%] flex justify-center items-center">
      <motion.img
        animate={{ x: Moved ? -600 : 0, y: Moved ? -300 : 0 }}
        transition={{ duration: 2 }}
        src={logo}
        className={`${Moved ? "w-[10%] h-[10%]" : "w-[30%] h-[30%]"}`}
      />
    </motion.div>
  );
};

export default Presentation;
