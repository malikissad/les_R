import logo from "../image/logo.svg";
import team from "../image/lesR.png";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar/navbar";
import { AffichageContext } from "../Context/affichageContext";

const Presentation = () => {
  const {Affichage, changeAffichage} = useContext(AffichageContext)
  const [Moved, setMoved] = useState(false);
  useEffect(() => {
    setTimeout(() => setMoved(true), 3000);
    setTimeout(() => changeAffichage(), 5000);
  }, []);

  return Affichage ? (
    <div className="grid grid-rows-[20%] h-full w-full">
      <Navbar></Navbar>
    </div>
  ) : (
    <motion.div
      animate={{ x: Moved ? -670 : 0, y: Moved ? -334 : 0 }}
      transition={{ duration: 2 }}
      className="flex justify-center items-center h-full w-full"
    >
      <img src={logo} className="h-[9%] w-[10%]" />
    </motion.div>
  );
};

export default Presentation;
