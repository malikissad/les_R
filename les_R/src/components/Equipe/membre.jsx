import img1 from "../../image/img1.svg";
import img2 from "../../image/img2.svg";
import img3 from "../../image/img3.svg";
import img4 from "../../image/img4.svg";

const Membre = () => {
  const images = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
  ];

  return (
  <div className="h-[60%] w-[50%]">
    {images.map((Element,index)=>{
        return (
            <img src={Element.image}/>
        )
    })}
  </div>
)
};

export default Membre;
