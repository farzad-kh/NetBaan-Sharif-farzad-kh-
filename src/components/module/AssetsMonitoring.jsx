import React from "react";
import chartImg from "/chart.png";
const AssetsMonitoring = ({ live, monitored }) => {
 
  const totlaReduce = (assets) => {
    const reducedAssets = assets.reduce((acc, cur) => acc + cur, 0);
    return reducedAssets;
  };
   
  return (
    <div className="flex justify-between gap-4 mb-3 ">
      <div className="flex-[0.5] flex  justify-between px-2">
        <div className="flex flex-col mr-1 ">
          <h3 className="text-sm font-bold">live</h3>
          <div className="font-bold text-left">{totlaReduce(live)}</div>
        </div>

        <i className="h-[45px] text-blue-400 flex justify-center">
          <img src={chartImg} />
        </i>
      </div>
      <div className="flex-[0.5] flex  justify-between px-2">
        <div className="flex flex-col mr-1 ">
          <h3 className="text-sm font-bold">Monitored</h3>
          <div className="font-bold text-left">{totlaReduce(monitored)}</div>
        </div>

        <i className="h-[45px] text-blue-400 flex justify-center">
          <img src={chartImg} />
        </i>
      </div>
    </div>
  );
};

export default AssetsMonitoring;
