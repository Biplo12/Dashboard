import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "../../DummyData/LatestOrdersData";
const LatestOrders = () => {
  return (
    <div className="latest-orders-container">
      <DataGrid columns={columns} rows={rows} className="latest-orders-grid" />
    </div>
  );
};

export default LatestOrders;
