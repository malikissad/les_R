import Element from "./element"
import {motion} from "framer-motion"
import { useContext } from "react"
import { AffichageContext} from "../../Context/affichageContext"

const ContentNavbar = () => {
    const {Affichage} = useContext(AffichageContext)
    const MotionElement = motion(Element)

    return (
       <div className="h-full w-[70%] flex flex-cols justify-center items-center ">
        <MotionElement 
         initial={{opacity:0, y:50}}
         animate={{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.2}}
         element="Accuil" 
         className="h-full w-[50%] rounded-md border-none active:border-none"
         cl="group text-gray-500 text font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </MotionElement>

        <MotionElement 
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.3}}  
         element="Equipe"
         className="h-full w-[50%] rounded-md border-none"
         cl="group text-gray-500 text  font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </MotionElement>

        <MotionElement 
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.4}} 
         element="Galerie"  
         className="h-full w-[50%] rounded-md border-none"
         cl="group text-gray-500 text  font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"> 
        </MotionElement>
        
        
        <MotionElement  
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.5}}
         element="Inscription"  
         className="h-full w-[80%] rounded-md border-none"
         cl="group text-gray-500 text  font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </MotionElement>

        <MotionElement 
         initial= {{opacity: 0, y:50}}
         animate= {{opacity: Affichage ? 1 : 0, y: Affichage ? 0: 50}}
         transition={{duration:1.5, delay:0.6}} 
         element="Contact"  
         className="h-full w-[60%] rounded-md border-none"
         cl="group text-gray-500 text  font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </MotionElement>
       </div>

    )
}
export default ContentNavbar