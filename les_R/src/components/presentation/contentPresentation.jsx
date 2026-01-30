import ButtonPresentation from "./button";
import { motion } from "framer-motion";
const ContentPresentation = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="w-full flex-col h-[55%] flex justify-center items-center">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-presentation font-bold text-white flex "
        >
          EQUIPE&nbsp;<span className="colorText">R</span>
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-description text-white font-xs"
        >
          Courez avec passion. Dépassez vos limites
        </motion.p>
      </div>
      <div className="h-[20%] w-full flex justify-center items-center gap-10">
        <ButtonPresentation
          delay="1.8"
          text="Rejoindre l'équipe"
          className="text-button-green text-button-green:hover rounded-3xl button-color h-[60%] w-[15%] border-none button-color:hover 
          transition-all duration-400 "
        ></ButtonPresentation>
        <ButtonPresentation
         delay="2"
          text="Découvrir l'équipe"
          className="text-button-green rounded-3xl button-color h-[60%] w-[15%] border-none  transition-all duration-400  
          button-color:hover text-button-green:hover hover:shadow-inner"
        ></ButtonPresentation>
      </div>
    </div>
  );
};
export default ContentPresentation;
