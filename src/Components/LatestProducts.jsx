import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./../DummyData/LatestProductsData";
const LatestProducts = () => {
  return (
    <div className="latest-products-container">
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={[5]}
        className="latest-products-grid"
      />
    </div>
  );
};

export default LatestProducts;
