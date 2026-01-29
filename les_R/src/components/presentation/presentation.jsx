import logo from "../../image/logo.svg";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/navbar.jsx";
import { AffichageContext } from "../../Context/affichageContext.jsx";
import ContentPresentation from "../presentation/contentPresentation.jsx";
import MainEquipe from "../Equipe/mainEquipe.jsx";
const Presentation = () => {
  const { Affichage, changeAffichage } = useContext(AffichageContext);
  const [Moved, setMoved] = useState(false);
  const [Anime, setAnime] = useState(false);
  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setAnime(true);
    }, 1000);

    const moveTimeout = setTimeout(() => {
      setAnime(false);
    }, 2000);

    const zoom = setTimeout(() => {
      setAnime(true);
    }, 3000);

    const changePlace = setTimeout(() => {
      setMoved(true);
    }, 5000);

    const showNavbar = setTimeout(() => {
      changeAffichage();
    }, 6500);
  }, []);

  if (Affichage) {
    return (
      <div className="grid grid-rows-[20%_80%_100%] h-screen w-full">
        <div className="h-full w-full">
          <Navbar />
        </div>
        <ContentPresentation />
        <MainEquipe />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full w-full overflow-hidden">
      <motion.img
        animate={{
          scale: Anime ? 1 : 2,
          x: Moved ? -670 : 0,
          y: Moved ? -334 : 0,
        }}
        transition={{ duration: 1.4 }}
        src={logo}
        className="h-[9%] w-[10%]"
      />
    </div>
  );

  
};
export default Presentation;
