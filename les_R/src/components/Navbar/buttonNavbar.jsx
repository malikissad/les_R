import { motion } from "framer-motion";
import { useContext } from "react";
import { AffichageContext } from "../../Context/affichageContext";
const ButtonNavbar = () => {
  const {ChangeNavbar} = useContext(AffichageContext)
  return (
    <button className={` group shadow-2xl h-[45%] w-[45%] rounded-3xl border-none hover
       ${ChangeNavbar ? "span-red span-red:hover hover:bg-white " : "bg-green hover:bg-white"}`}>
        <p className={`text-xl font-semibold transition-all duration-500 
          ${ChangeNavbar ? "text-white group-hover:text-red-600":"text-button-green group-hover:text-[#b1ce39]"}`}>Rejoin-nous</p>
    </button>
  );
};

export default ButtonNavbar;
