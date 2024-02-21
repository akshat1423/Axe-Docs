import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Cards = ({ data, referenace }) => {
  console.log(referenace);
  return (
    <motion.div
      drag
      dragConstraints={referenace}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className=" relative h-72 w-60 rounded-[35px] bg-zinc-700 px-8 py-10 text-white overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt />
      <p className="leading-right text-sm mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute w-full h-15 left-0   bottom-0 ">
        <div className=" flex items-center justify-between px-7 mb-4 ">
          <h5>{data.fileSize}</h5>
          <span className="w-8 h-8 rounded-full flex items-centre justify-center bg-slate-600 rounded-full py-1 px-1">
            {data.close ? <IoCloseOutline size="1.4em"/> : <MdOutlineFileDownload size="1.4em"/>}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div className="tag w-full py-4 bg-green-600  flex items-center justify-center">
            <h3 className=" text-sm font-semibold">
              {data.tagDetails.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
