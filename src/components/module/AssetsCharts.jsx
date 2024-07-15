import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
const AssetsCharts = ({ chartValue }) => {
  const data = chartValue.map((value) => ({ value }));

  return (
    <div className="w-[78px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar barSize={6} radius={8} dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetsCharts;
