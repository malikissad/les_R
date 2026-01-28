import ContentNavbar from "./contentNavbar";
import logo from "../../image/logo.svg"
import ButtonNavbar from "./buttonNavbar";
const Navbar = () => {
  return (
    <div className="m-3 grid grid-cols-[20%_60%_20%]">
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
