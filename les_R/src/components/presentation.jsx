import logo from "../image/logo.svg";
import team from "../image/lesR.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/navbar";
const Presentation = () => {
  const [Moved, setMoved] = useState(false);

    useEffect(() => {
     setTimeout(() => setMoved(true), 3000);
    }, []);

    return ( 
        Moved ? (
            <div className="grid grid-rows-[20%] h-full w-full">
                <Navbar></Navbar>
            </div>
        ):(
            <div>
                <img src={logo}/>
            </div>

        )
    )
  
};

export default Presentation;
