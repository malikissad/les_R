const Input = ({ element, placeholder, type,setNom, setEmail}) => {

  const handlechange=(e)=>{
    {element == "Nom Complet" ? setNom(e.target.value) : setEmail(e.target.value)}
  }


  return (
    <div className="h-[20%] w-[90%] flex flex-col">
      <label className="text-lg font-semibold mb-2 text-gray-800">
        {element}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        onChange={handlechange}
        className="h-[40%] w-full rounded-xl ring-1 ring-gray-400 pl-4 placeholder:text-xl
             transition-all duration-800 focus:ring-red-500 focus:ring-2 focus:outline-none 
             focus:shadow-[0_0_20px_3px_rgba(236,72,153,0.6)] text-lg"
      />
    </div>
  );
};

export default Input;
