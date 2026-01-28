import Membre from "./membre";
const MainEquipe = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen w-full bg-white">
            <p className="text-5xl font-bold text-color">Notre Equipe</p>
            <p className="text-xl">Des athlètes passionnés unis par l'amour de la course et le dépassement de soi.</p>
            <Membre></Membre>
        </div>
    )
}
export default MainEquipe;