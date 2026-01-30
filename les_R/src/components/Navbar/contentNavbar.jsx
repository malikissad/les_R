import Element from "./element"
import {motion} from "framer-motion"
import { useContext } from "react"
import { AffichageContext} from "../../Context/affichageContext"

const ContentNavbar = () => {
    const {Affichage, ChangeNavbar} = useContext(AffichageContext)
    const MotionElement = motion(Element)

    return (
       <div className={`${ChangeNavbar ? "w-[90%]" : "w-[70%]"} h-full flex flex-cols justify-center items-center `}>
        <MotionElement 
         initial={{opacity:0, y:50}}
         animate={{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.2}}
         element="Accuil" 
         className="h-full w-[50%] rounded-md border-none active:border-none"
         cl={`group text font-bold transition-all duration-500 ease-out ${ChangeNavbar ? "text-color-ChangeNavbar text-color-ChangeNavbar:hover" : "text-color-navbar text-color-navbar:hover"}`}
         cl1={`block h-0.5 w-0 transition-all duration-500 group-hover:w-full ${ChangeNavbar ? "span-red" : "color-span"}`}>
        </MotionElement>

        <MotionElement 
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.3}}  
         element="Equipe"
         className="h-full w-[50%] rounded-md border-none"
          cl={`group text font-bold transition-all duration-500 ease-out ${ChangeNavbar ? "text-color-ChangeNavbar text-color-ChangeNavbar:hover" : "text-color-navbar text-color-navbar:hover"}`}
         cl1={`block h-0.5 w-0 transition-all duration-500 group-hover:w-full ${ChangeNavbar ? "span-red" : "color-span"}`}>
        </MotionElement>

        <MotionElement 
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.4}} 
         element="Galerie"  
         className="h-full w-[50%] rounded-md border-none"
          cl={`group text font-bold transition-all duration-500 ease-out ${ChangeNavbar ? "text-color-ChangeNavbar text-color-ChangeNavbar:hover" : "text-color-navbar text-color-navbar:hover"}`}
         cl1={`block h-0.5 w-0 transition-all duration-500 group-hover:w-full ${ChangeNavbar ? "span-red" : "color-span"}`}>
        </MotionElement>
        
        
        <MotionElement  
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.5}}
         element="Inscription"  
         className="h-full w-[80%] rounded-md border-none"
         cl={`group text font-bold transition-all duration-500 ease-out ${ChangeNavbar ? "text-color-ChangeNavbar text-color-ChangeNavbar:hover" : "text-color-navbar text-color-navbar:hover"}`}
         cl1={`block h-0.5 w-0 transition-all duration-500 group-hover:w-full ${ChangeNavbar ? "span-red" : "color-span"}`}>
        </MotionElement>

        <MotionElement 
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.6}} 
         element="Contact"  
         className="h-full w-[60%] rounded-md border-none"
          cl={`group text font-bold transition-all duration-500 ease-out ${ChangeNavbar ? "text-color-ChangeNavbar text-color-ChangeNavbar:hover" : "text-color-navbar text-color-navbar:hover"}`}
         cl1={`block h-0.5 w-0 transition-all duration-500 group-hover:w-full ${ChangeNavbar ? "span-red" : "color-span"}`}>
        </MotionElement>
       </div>

    )
}
export default ContentNavbar