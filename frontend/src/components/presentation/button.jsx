import {motion} from "framer-motion"

const ButtonPresentation = ({text, className, y, opacity, delay}) => {
    return (
        <motion.button 
         initial={{y:10,opacity:0}}
         animate={{y:0 , opacity:1}}
         transition={{duration:1, delay:delay, ease:"easeOut"}}
         className={className}>
           <p className="text-xl font-semibold">
            {text}
           </p>
        </motion.button>
    )
}
export default ButtonPresentation