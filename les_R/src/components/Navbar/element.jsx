import { forwardRef } from "react";

const Element = forwardRef(({element, className, cl, cl1},ref) => {
  return (
    <div ref={ref} className="flex justify-center items-center h-[30%] w-full">
      <button className={className}>
        <p className={cl}>
            {element}
            <span className={cl1}></span>
        </p>
      </button>
    </div>
  )
})
export default Element;
