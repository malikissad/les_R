import Form from "./form.jsx";

const Cadre = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[40%] flex flex-col justify-center items-center">
        <p className="text-black text-6xl font-bold mb-5">
          Rejoignez <span className="text-red-500">l'Équipe R</span>
        </p>
        <p className="text-gray-500 text-xl">
          Prêt à courir avec nous ? Inscrivez-vous et devenez membre de notre
          équipe.
        </p>
      </div>
      <Form></Form>
    </div>
  );
};

export default Cadre;
