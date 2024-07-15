import React from "react";
import chartImg from "/chart.png";
import AssetsCharts from "./AssetsCharts";
const AssetsMonitoring = ({ live, monitored,total }) => {
 
  // const totlaReduce = (assets) => {
  //   const reducedAssets = assets.reduce((acc, cur) => acc + cur, 0);
  //   return reducedAssets;
  // };
  const {total_monitored,total_live}=total
  return (
    <div className="flex justify-between gap-4 mb-3 ">
      <div className="flex-[0.5] flex  justify-between pr-2">
        <div className="flex flex-col mr-1 ">
          <h3 className="text-sm font-bold">live</h3>
          <div className="font-bold text-left">{total_live}</div>
        </div>

        <div className=" w-full flex justify-end">
      <AssetsCharts chartValue={live}/>
        </div>
      </div>
      <div className="flex-[0.5] flex  justify-between pr-2">
        <div className="flex flex-col mr-1 ">
          <h3 className="text-sm font-bold">Monitored</h3>
      
          <div className="font-bold text-left">{total_monitored}</div>
        </div>

        <div className=" w-full flex justify-end">
        <AssetsCharts chartValue={monitored}/>
        </div>
      </div>
    </div>
  );
};

export default AssetsMonitoring;
