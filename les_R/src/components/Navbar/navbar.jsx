import ContentNavbar from "./contentNavbar";
import logo from "../../image/logo.svg"
import ButtonNavbar from "./buttonNavbar";
const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-[15%] w-full grid grid-cols-[20%_60%_20%] bg-white/5 backdrop-blur-lg">
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
