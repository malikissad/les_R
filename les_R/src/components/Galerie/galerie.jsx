import Content from "./content";

const Galerie = () => {
  return (
    <div className="w-full h-[90%] mt-10 flex flex-col justify-center items-center">
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
      <Content className="h-full w-full flex flex-cols justify-center items-center"></Content>
    </div>
  );
};

export default Galerie;
