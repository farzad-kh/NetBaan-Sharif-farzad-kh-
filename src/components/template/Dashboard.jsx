import React, { useEffect, useState } from "react";
import getData from "../../services/api.client";
import AssetsCard from "../module/AssetsCard";
import AssetTableContainer from "../module/AssetTableContainer";
import Loading from "../loading/Loading";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [assetValue, setAssetValue] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    // fetching data at mounting
    const fetchData = async () => {
      setIsloading(true);
      setData(await getData());
      setIsloading(false);
    };

    fetchData();
  }, []);

  // function to filter assets
  const filterAssets = (value) => {
    setAssetValue(value);
  };

  // Showing loading spinner
  if (isLoading) return <Loading/>
    
      

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1380px] overflow-hidden  p-4 md:p-6 ">
        <div className="flex flex-row justify-center gap-4 xl:gap-7 mb-8 max-lg:flex-wrap">
          <AssetsCard
            data={data?.domain}
            label={"Domain"}
            filterAssets={filterAssets}
          />
          <AssetsCard
            data={data?.ip}
            label={"IP Addresses"}
            filterAssets={filterAssets}
          />
          <AssetsCard
            data={data?.cloud}
            label={"Cloud Accounts"}
            filterAssets={filterAssets}
          />
        </div>

        <AssetTableContainer data={data?.assets} assetValue={assetValue} />
      </div>
    </div>
  );
};

export default Dashboard;
