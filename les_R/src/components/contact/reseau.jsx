import LinkReseau from "./reseaudiv";

const Reseau = () => {
  return (
    <div className="w-full h-[15%] flex justify-center items-center gap-7 ">
      <LinkReseau type="Instagram"></LinkReseau>
      <LinkReseau type="Facebook"></LinkReseau>
      <LinkReseau type="Twitter"></LinkReseau>
    </div>
  );
};

export default Reseau;
