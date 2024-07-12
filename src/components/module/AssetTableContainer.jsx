import React from "react";
import { TbHexagonFilled } from "react-icons/tb";
import AssetTable from "./AssetTable";
const AssetTableContainer = ({ data, assetValue }) => {
  let assetType =
    assetValue.split(" ").length > 0 ? assetValue.split(" ")[0] : assetValue;
 
    //filtering data by type of value
  const dataFilter = data?.filter(
    (asset) => asset.type.includes(assetType.toLowerCase())
  );
  
  

  return (
    <div className="table w-full   rounded-lg">
      <h2 className="text-xl font-bold text-slate-50 text-left mt-6 mb-4">
        Asseet
      </h2>
      <table className="w-full overflow-hidden rounded-xl">
        <thead className="py-5 ">
          <tr className="text-slate-200">
            <th>Grade</th>
            <th>Name</th>
            <th>Totsl Vunlnerabilities</th>
            <th className="max-sm:hidden">Last Seen</th>
          </tr>
        </thead>
        <tbody className="bg-odd">
          <AssetTable assets={!assetValue ? data : dataFilter} />
        </tbody>
      </table>
    </div>
  );
};

export default AssetTableContainer;
