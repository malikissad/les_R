import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
const ContentContact = ({ type }) => {
  if (type == "Mail") {
    return (
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5 }}
        className="group/hov bg-[#323030] h-[65%] w-[25%] rounded-3xl shadow-2xl flex flex-col justify-center items-center"
      >
        <div className="w-full h-[30%] flex justify-center items-center">
          <div
            className="bg-[#5c0404] h-[95%] w-[18%] flex justify-center items-center rounded-full
          transition-all duration-500 group-hover/hov:bg-[#bd0e0e]"
          >
            <Mail
              size={35}
              className="text-red-600 transition-all duration-500 group-hover/hov:text-white"
            />
          </div>
        </div>
        <p className=" w-full h-[20%] flex justify-center items-center text-gray-400 text-xl">
          EMAIL
        </p>
        <p className=" w-full h-[15 %] flex justify-center items-center text-white text-xl mb-3">
          Contact@gmail.com
        </p>
      </motion.div>
    );
  }
  if (type == "Phone") {
    return (
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 1 }}
        className="group/hov bg-[#323030] h-[65%] w-[25%] rounded-3xl shadow-2xl flex flex-col justify-center items-center"
      >
        <div className=" w-full h-[30%] flex justify-center items-center">
          <div
            className="bg-[#5c0404] h-[95%] w-[18%] flex justify-center items-center rounded-full
          transition-all duration-500 group-hover/hov:bg-[#bd0e0e]"
          >
            <Phone
              size={35}
              className="text-red-600 transition-all duration-500 group-hover/hov:text-white"
            />
          </div>
        </div>
        <p className=" w-full h-[20%] flex justify-center items-center text-gray-400 text-xl">
          TELEPHONE
        </p>
        <p className=" w-full h-[15 %] flex justify-center items-center text-white text-xl mb-3">
          +213 561225599
        </p>
      </motion.div>
    );
  }
  if (type == "Map") {
    return (
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 1 }}
        className="group/hov bg-[#323030] h-[65%] w-[25%] rounded-3xl shadow-2xl flex flex-col justify-center items-center"
      >
        <div className=" w-full h-[30%] flex justify-center items-center">
          <div
            className="bg-[#5c0404] h-[95%] w-[18%] flex justify-center items-center rounded-full
          transition-all duration-500 group-hover/hov:bg-[#bd0e0e]"
          >
            <MapPin
              size={35}
              className="text-red-600 transition-all duration-500 group-hover/hov:text-white"
            />
          </div>
        </div>
        <p className=" w-full h-[20%] flex justify-center items-center text-gray-400 text-xl">
          ADRESSE
        </p>
        <p className=" w-full h-[15 %] flex justify-center items-center text-white text-xl mb-3">
          PARIS, FRANCE
        </p>
      </motion.div>
    );
  }
};
export default ContentContact;
