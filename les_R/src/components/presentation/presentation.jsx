import logo from '../../image/logo.svg';
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import Navbar from '../Navbar/navbar.jsx';
import { AffichageContext } from "../../Context/affichageContext.jsx";

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

    // const zoom = setInterval (()=>{
    //   setAnime(!Anime)
    // }, 1000)

    const changePlace = setTimeout(() => {
      setMoved(true);
    }, 5000);

    const showNavbar = setTimeout(() => {
      changeAffichage();
    }, 6500);
  }, []);

  if (Affichage) {
    return (
      <div className="grid grid-rows-[20%_80%] h-full w-full">
        <Navbar></Navbar>
        <div></div>

      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <motion.img
        animate={{scale : Anime ? 1 : 2 , x: Moved ? -670 : 0, y:Moved ? -334 : 0}}
        transition={{ duration: 1.4 }}
        src={logo}
        className="h-[9%] w-[10%]"
      />
    </div>
  );

  // if (Anime) {
  //   return (
  //     <motion.div
  //       initial={{ scale: 1 }}
  //       animate={{ scale: 1.5 }}
  //       transition={{ duration: 1 }}
  //       className="flex justify-center items-center h-full w-full"
  //     >
  //       <img src={logo} className="h-[9%] w-[10%]" />
  //     </motion.div>
  //   );
  // }
  // if (!Anime) {
  //   return (
  //     <div className="flex justify-center items-center h-full w-full">
  //       <motion.img
  //         initial={{ scale: 1.5 }}
  //         animate={{ scale: 1 }}
  //         transition={{ duration: 1 }}
  //         src={logo}
  //         className="h-[9%] w-[10%]"
  //       />
  //     </div>
  //   );
  // }
};
export default Presentation;
