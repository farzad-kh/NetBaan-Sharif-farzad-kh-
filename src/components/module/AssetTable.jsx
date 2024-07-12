import React from "react";
import { TbHexagonFilled } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
const AssetTable = ({ assets }) => {
  
  //convert time stamp
  const timeConvert = (timeVal) => {
    const date = new Date(timeVal);
    return date.toLocaleString();
  };

  return (
    <AnimatePresence>
      {assets?.map((assets, i) => (
        <motion.tr
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          key={i}
          className=" bg-[#323C50]  text-slate-300 w-full my-3"
        >
          <td className="p-4 border-b-[6px] border-[#1a1a1a]">
            <div className="flex justify-center">
              <TbHexagonFilled className="text-5xl relative fill-[#e6e9ea]" />
              <div className="absolute z-10 text-red-600 font-semibold translate-y-[40%] ">
                {assets.grade}
              </div>
            </div>
          </td>
          <td className="p-4 border-b-[6px] border-[#1a1a1a]">{assets.name}</td>
          <td className="p-4 border-b-[6px] border-[#1a1a1a]">
            {assets.total_vuls}
          </td>
          <td className="p-4 border-b-[6px] border-[#1a1a1a] max-sm:hidden">
            {timeConvert(assets.lastSeen)}
          </td>
        </motion.tr>
      ))}
    </AnimatePresence>
  );
};

export default AssetTable;
