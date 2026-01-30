import Membre from "./membre";
const MainEquipe = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full bg-gray-100">
      <div className="flex flex-col justify-center items-center mt-40">
        <p className="text-5xl font-bold text-color mb-2">Notre Equipe</p>
        <p className="text-xl ">
          Des athlètes passionnés unis par l'amour de la course et le
          dépassement de soi.
        </p>
      </div>
      <Membre></Membre>
    </div>
  );
};
export default MainEquipe;
