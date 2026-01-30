import Content from "./content";

const Galerie = () => {
  return (
    <div className="bg-slate-400 w-[90%] h-[90%] mt-10 flex flex-col justify-center items-center">
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
    </div>
  );
};

export default Galerie;
