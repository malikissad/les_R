import img1 from "../../image/img1.png";
import img2 from "../../image/img2.png";
import img3 from "../../image/img3.png";
import img4 from "../../image/img4.png";
const Membre = () => {
  const images = [
    {
      image: img1,
      nom: "Marc Dupont",
      Role: "Vice-capitaine",
      type: "10km: 38min",
      desc: '"Chaque foulée nous rapproche de la victoire."',
    },
    {
      image: img2,
      nom: "Lucas Bernard",
      Role: "Sprinter",
      type: "400m: 48s",
      desc: '"La persévérance est la clé du succès."',
    },
    {
      image: img3,
      nom: "Sophie Martin",
      Role: "Vice-capitaine",
      type: "10km: 38min",
      desc: `"L'intensité fait la différence."`,
    },
    {
      image: img4,
      nom: "Emma Leroy",
      Role: "Trail Runner",
      type: "Ultra-trail: Top 10",
      desc: `"Les montagnes sont mon terrain de jeu."`,
    },
  ];

  return (
    <div className="h-[60%] w-[100%] flex gap-10 justify-center items-center">
      {images.map((Element, index) => {
        return (
          <div
            key={index}
            className="bg-black group/outer h-[80%]  relative flex justify-center items-center rounded-2xl overflow-hidden"
          >
            <img
              src={Element.image}
              className="w-[100%] h-[100%] rounded-xl transition-all duration-1000 ease-out group-hover/outer:scale-110"
            />
            <div className="left-10 right-5 -bottom-10 absolute h-full w-full flex flex-col justify-center itams-center">
              <p className="text-3xl font-bold text-red-600">{Element.nom}</p>
              <p className="text-xl font-bold text-white">{Element.Role}</p>
              <p className="text-lg text-white font-semibold">{Element.type}</p>
              <p
                className="opacity-0 text-gray-300 text-lg font h-[20%] flex justify-start 
              items-center transition-opacity duration-300 ease-out group-hover/outer:opacity-100"
              > 
                {Element.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Membre;
