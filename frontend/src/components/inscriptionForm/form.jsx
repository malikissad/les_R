import Input from "./input";
import {Link} from "react-router-dom"
const Form = () => {
  const options = ["Selectionner Votre Réponse","Débutant", "Intermédiaire", "Avancé", "Elite"];
  return (
    <div className="w-full h-[100%] mb-10 flex justify-center items-center">
      <div className="bg-white h-full w-[50%] shadow-2xl rounded-3xl ring-1 ring-gray-200 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-full w-full gap-2">
            <Input
          element="Nom Complet"
          placeholder="Votre Nom Complet"
          type="Text"
        ></Input>
        <Input element="Email" placeholder="Votre Email" type="Email"></Input>

        <div className="h-[17%] w-[90%]">
          <label className="text-lg font-semibold mb-2 text-gray-800">Niveau</label>
          <select className="mt-2 p-5 h-[50%] w-full rounded-xl ring-1 transition-all duration-800 ring-gray-400
             focus:ring-2 focus:ring-red-500 focus:outline-none
             focus:shadow-[0px_0px_20px_3px_rgba(236,72,153,0.6)]
             flex items-center">
            {options.map((element, index) => {
              return <option 
               value={element}
               className="text-xl rounded-xl">{element}</option>;
            })}
          </select>

        </div>
        <div className="h-[20%] w-[90%] flex flex-col">
            <label className="text-lg font-semibold mb-2 text-gray-800">Message (optionnel)</label>
            <textarea 
            className="resize-none pl-5 pt-2 text-lg h-[70%] ring-1 ring-gray-400 rounded-xl 
            transition-all duration-800 focus:ring-2 focus:ring-red-500 focus: outline-none 
            focus:shadow-[0px_0px_20px_3px_rgba(236,72,153,0.6)] placeholder:text-xl"
            
            placeholder="Parlez Nous Un Peut De Votre Objéctif"></textarea>
        </div>
        </div>

        <div className="h-[15%] w-[90%] flex justify-center items-center">
            <button className="mb-6 bg-red-500 h-[70%] w-full rounded-2xl text-xl font-semibold
             text-white hover:border-none hover:bg-white hover:ring-2 hover:ring-red-500 hover:text-red-500
             focus:border-none focus:outline-none active:scale-95 transition-all duration-200">Rejoindre L'équipe</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
