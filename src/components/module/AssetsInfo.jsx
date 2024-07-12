import React from 'react';
import worldImg from "/world.png";
import portImg from "/port.png";
import bugImg from "/bug.png";
 
const AssetsInfo = ({ips,ports,vulns}) => {
    return (
        <div className="flex justify-between items-center">
          <div className="flex gap-[6px]">
            <span className="bg-[#327794] rounded-lg w-12">
              <img src={worldImg} className="w-full h-full relative p-[10px]" />
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-inherit">Ips</p>
              <p className="font-bold text-left">{ips}</p>
            </div>
          </div>
          <div className="flex gap-[6px]">
            <span className="bg-[#327794] rounded-lg w-12">
              <img src={portImg} className="w-full h-full relative p-[10px]" />
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-inherit">Ports</p>
              <p className="font-bold text-left ">{ports}</p>
            </div>
          </div>
          <div className="flex gap-[6px]">
            <span className="bg-[#327794] rounded-lg w-12">
              <img src={bugImg} className="w-full h-full relative p-[10px]" />
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-inherit">Vulns</p>
              <p className="font-bold text-left">{vulns}</p>
            </div>
          </div>
        </div>
    );
};

export default AssetsInfo;