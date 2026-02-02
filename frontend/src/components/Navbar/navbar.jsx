import ContentNavbar from "./contentNavbar";
import logo from "../../image/logo.svg"
import ButtonNavbar from "./buttonNavbar";
import { useContext } from "react";
import { AffichageContext } from "../../Context/affichageContext";
const Navbar = () => {
  const {ChangeNavbar} = useContext(AffichageContext)

  return (
    <div className={`fixed top-0 z-50 h-[15%]  grid grid-cols-[20%_60%_20%] transition-all duration-500
     ${ChangeNavbar ? "bg-white/10 backdrop-blur-xl w-[80%] rounded-3xl mt-10 shadow-2xl" : "bg-black w-full"}`}>
      <div className="h-full w-full flex justify-center items-center">
        <img src={logo} className="h-[50%] w-[50%]"/>
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <ContentNavbar></ContentNavbar>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <ButtonNavbar></ButtonNavbar>
      </div>
    </div>
  );
};
export default Navbar;
