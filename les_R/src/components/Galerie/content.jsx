import { useState } from "react";
import image from "../../image/galerie.jpg";
import { motion } from "framer-motion";

const Content = ({ className }) => {
  const [Hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
    >
      {!Hover ? (
        <>
          <p className="flex justify-center items-center h-full w-[50%] text-4xl font-semibold text-white">
            sortie long
          </p>
          <p className="h-full w-[80%] flex justify-center items-center text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni
            laborum et ducimus excepturi aspernatur autem quisquam dolorum
            optio. Ab eaque, at similique rem nostrum ut! Unde suscipit rerum
            aut.
          </p>
        </>
      ) : (
        <>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="h-full w-full grid grid-cols-[1fr_1fr_1fr_1fr] gap-5"
          >
            <div className="bg-red-950"></div>
            <div className="relative">
              <img
                src={image}
                className="rounded-image absolute inset-0 h-[70%] w-full object-cover"
              />
            </div>
            <div className="bg-red-950"></div>
            <div className="relative">
              <img
                src={image}
                className="rounded-image absolute inset-0 h-[70%] w-full object-cover"
              />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};
export default Content;
