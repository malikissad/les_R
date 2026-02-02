import Galerie from "./galerie"
const MainGalerie = () => {
    return (
        <div className="h-full w-full bg-black flex justify-center items-center">
         <div className="h-[80%] w-full flex flex-col justify-center items-center">
            <p className="colorText text-6xl font-semibold">Un peut de souvenirs</p>
            <Galerie></Galerie>
         </div>
        </div>
    )
}

export default MainGalerie