import Element from "./element"

const ContentNavbar = () => {
    return (
       <div className="h-full w-[80%] flex flex-cols justify-center items-center ">
        <Element 
         element="Accuil" 
         className="h-full w-[50%] rounded-md border-none"
         cl="group text-gray-500 text-2xl font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </Element>

        <Element  
         element="Equipe"
         className="h-full w-[50%] rounded-md border-none"
         cl="group text-gray-500 text-2xl font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </Element>

        <Element 
         element="Galerie"  
         className="h-full w-[50%] rounded-md border-none"
         cl="group text-gray-500 text-2xl font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"> 
        </Element>
        
        
        <Element 
         element="Inscription"  
         className="h-full w-[80%] rounded-md border-none"
         cl="group text-gray-500 text-2xl font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </Element>

        <Element 
         element="Contact"  
         className="h-full w-[60%] rounded-md border-none"
         cl="group text-gray-500 text-2xl font-semibold transition-all duration:500 easy-out hover:text-white"
         cl1="block h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full">
        </Element>
       </div>

    )
}
export default ContentNavbar