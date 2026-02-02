import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {motion} from 'framer-motion'
const LinkReseau = ({ type }) => {
  if (type == "Instagram") {
    return (
      <motion.button
      whileHover={{scale:1.1}}
      transition={{duration:0.5}}
      className="mb-24 group h-[35%] w-[3%] rounded-full ring-2 ring-[#cb0a0a] hover:border-none hover:bg-[#cb0a0a]">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#cb0a0a]  group-hover:text-white"/>
      </motion.button>
    );
  } else if (type == "Facebook") {
    return (
      <motion.button
       whileHover={{scale:1.2}}
      transition={{duration:0.5}}
      className="mb-24  group h-[35%] w-[3%] rounded-full ring-2 ring-[#cb0a0a]
       hover:border-none hover:bg-[#cb0a0a]">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="text-[#cb0a0a] group-hover:text-white"/>
      </motion.button>
    );
  } else if (type == "Twitter") {
    return (
      <motion.button
       whileHover={{scale:1.1}}
      transition={{duration:0.5}}
      className="mb-24 group h-[35%] w-[3%] rounded-full ring-2 ring-[#cb0a0a] hover:border-none hover:bg-[#cb0a0a]">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#cb0a0a]  group-hover:text-white"/>
      </motion.button>
    );
  }
};

export default LinkReseau;
