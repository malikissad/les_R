import Input from "./input";
import { useState } from "react";
const Form = () => {
  const options = [
    "Selectionner Votre Réponse",
    "Débutant",
    "Intermédiaire",
    "Avancé",
    "Elite",
  ];

  const [Nom, setNom] = useState("");
  const [Email, setEmail] = useState("");
  const [Niveau, setNiveau] = useState("");
  const [Autre, setAutre] = useState("");

  const handlechangeTextErea = (e) =>{
    setAutre(e.target.value)
  }
  const handlechangeSelect = (e) => {
    setNiveau(e.target.value)
  }
  async function fetchFonction(Nom, Email, Niveau, Autre) {
    const response = await fetch("http://localhost:3000/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Nom,
        email: Email,
        niveau: Niveau,
        autre: Autre
      }),
    });

    console.log(response);
    console.log(await response.json());

    // return response.json()
  }

  return (
    <div className="w-full h-[100%] mb-10 flex justify-center items-center">
      <div className="bg-white h-full w-[50%] shadow-2xl rounded-3xl ring-1 ring-gray-200 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center h-full w-full gap-2">
          <Input
            element="Nom Complet"
            placeholder="Votre Nom Complet"
            type="Text"
            setNom={setNom}
          ></Input>

          <Input
            element="Email"
            placeholder="Votre Email"
            type="Email"
            setEmail={setEmail}
          ></Input>

          <div className="h-[17%] w-[90%]">
            <label className="text-lg font-semibold mb-2 text-gray-800">
              Niveau
            </label>
            <select
              className="mt-2 p-5 h-[50%] w-full rounded-xl ring-1 transition-all duration-800 ring-gray-400
             focus:ring-2 focus:ring-red-500 focus:outline-none
             focus:shadow-[0px_0px_20px_3px_rgba(236,72,153,0.6)]
             flex items-center"
             onChange={handlechangeSelect}
            >
              {options.map((element, index) => {
                return (
                  <option value={element} className="text-xl rounded-xl">
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="h-[20%] w-[90%] flex flex-col">
            <label className="text-lg font-semibold mb-2 text-gray-800">
              Message (optionnel)
            </label>
            <textarea
              className="resize-none pl-5 pt-2 text-lg h-[70%] ring-1 ring-gray-400 rounded-xl 
            transition-all duration-800 focus:ring-2 focus:ring-red-500 focus: outline-none 
            focus:shadow-[0px_0px_20px_3px_rgba(236,72,153,0.6)] placeholder:text-xl"
              placeholder="Parlez Nous Un Peut De Votre Objéctif"
              onChange={handlechangeTextErea}
            ></textarea>
          </div>
        </div>

        <div className="h-[15%] w-[90%] flex justify-center items-center">
          <button
            onClick={() => {
              console.log("nom : "+Nom);
              console.log("Email : "+Email);
              console.log("niveau : "+Niveau);
              console.log("autre : "+Autre);
              fetchFonction(Nom, Email,Niveau,Autre);
            }}
            className="mb-6 bg-red-500 h-[70%] w-full rounded-2xl text-xl font-semibold
             text-white hover:border-none hover:bg-white hover:ring-2 hover:ring-red-500 hover:text-red-500
             focus:border-none focus:outline-none active:scale-95 transition-all duration-200"
          >
            Rejoindre L'équipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
