const Element = ({element, className, cl, cl1}) => {
  return (
    <div className="flex justify-center items-center h-[30%] w-full">
      <button className={className}>
        <p className={cl}>
            {element}
            <span className={cl1}></span>
        </p>
      </button>
    </div>
  );
};
export default Element;
