import React from "react";

import { GoArrowUpRight } from "react-icons/go";
import Logo from "../../assets/assetsLogo/index";

import AssetsMonitoring from "./AssetsMonitoring";
import AssetsInfo from "./AssetsInfo";
const AssetsCard = ({ data, label, filterAssets }) => {
  const { ips, ports, total, live, monitored, vulns,total_live,total_monitored } = data || {};

  //    background-color changing based on the value of label
  const logoBg =
    label === "Domain"
      ? "bg-green-600"
      : label === "IP Addresses"
      ? "bg-violet-500"
      : "bg-teal-500";

  return (
    <div
      onClick={() => filterAssets(label)}
      className="rounded-xl bg-[#1D2229] py-9 px-4 w-[400px] text-slate-50 group cursor-pointer hover:bg-[#272d36] "
    >
      <div className="flex flex-col justify-between">
        <div className=" flex flex-row justify-between items-center  relative gap-y-4 rounded-md mb-5">
          <div
            className={` ${logoBg} 00 flex flex-col w-[62px] rounded-lg justify-center items-center overflow-hidden `}
          >
            <i className="p-[2px] w-[45px] ">
              <img
                src={Logo[label]}
                className="text-4xl text-slate-100 object-contain w-full "
              />
            </i>
            <div className=" bg-white w-full py-[1px] font-bold  text-sm text-center text-slate-900">
              {total}
            </div>
          </div>
          <div className="flex self-baseline transition-all duration-200  group-hover:rotate-[135deg] ">
            <GoArrowUpRight className="text-white text-2xl " />
          </div>
        </div>
        <h3 className="text-left  font-bold mb-[6px]">{label}</h3>
        <span className="h-[1px] w-full bg-slate-100 mb-8"></span>
        <AssetsMonitoring
          live={live}
          monitored={monitored}
          total={{total_live,total_monitored}}
        />
        <span className="h-[1px] w-full bg-slate-100 mb-8"></span>
        <AssetsInfo ips={ips} ports={ports} vulns={vulns} />
      </div>
    </div>
  );
};

export default AssetsCard;
