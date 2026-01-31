import { motion } from "framer-motion";
import { useContext } from "react";
import { AffichageContext } from "../../Context/affichageContext";
const ButtonNavbar = () => {
  const { ChangeNavbar, Page } = useContext(AffichageContext);
  
  if (Page == "accuil" || Page == "galerie" || Page == "contact") {
    return (
      <button
        className={`group shadow-2xl h-[45%] w-[45%] rounded-3xl border-none bg-green transition-all duration-300 hover:bg-white`}
      >
        <p
          className={`text-xl font-semibold transition-all duration-500 text-button-green group-hover:text-[#b1ce39]`}
        >
          Rejoin-nous
        </p>
      </button>
    );
  }

  if (Page == "equipe" || Page == "form") {
    return (
      <button
        className={`group shadow-2xl h-[45%] w-[45%] rounded-3xl border-none const span-red span-red:hover transition-all duration-300 hover:bg-white *:`}
      >
        <p
          className={`text-xl font-semibold transition-all duration-500 
          ${ChangeNavbar ? "text-white group-hover:text-red-600" : "text-button-green group-hover:text-[#b1ce39]"}`}
        >
          Rejoin-nous
        </p>
      </button>
    );
  }
};

export default ButtonNavbar;
