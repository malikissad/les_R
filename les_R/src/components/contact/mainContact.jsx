import ContentContact from "./contentContact"
import Reseau from "./reseau"
import image from '../../image/logo.svg'
const MainContact = () =>{
    return (
        <div className="bg-[#1d1c1c]">
           <div className="w-full h-[30%] flex flex-col justify-center items-center">
             <p className="text-6xl font-bold mb-3 text-white">
                Contactez-<span className="text-red-500">Nous</span>
            </p>
            <p className="text-gray-500 text-2xl">
                Une question ? N'hésitez pas à nous contacter.
            </p>
           </div>
           <div className="w-full h-[40%] gap-8 flex flex-row justify-center items-center">
            <ContentContact type="Mail"></ContentContact>
            <ContentContact type="Phone"></ContentContact>
            <ContentContact type="Map"></ContentContact>
            </div>
            <Reseau></Reseau>

            <div className="w-full h-[8%] grid grid-cols-[25%_50%_25%] mt-12 border-t-2 border-t-gray-500">
                <div className="h-full w-full flex justify-center items-center">
                    <img src={image} className="h-[40%] w-[15%]"/>
                    <p className="text-xl text-white mt-5 font-semibold font">#mes_que_un_club</p>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                    <p className="text-white mt-5 text-xl font-semibold font">© 2026 Équipe R. Tous droits réservés.</p>
                </div>
                <div className="h-full w-full flex justify-center items-center">
                    <p className="text-red-600 font-semibold mt-5 font">↑ Retour en haut</p>
                </div>

            </div>
        </div>
    )
}

export default MainContact