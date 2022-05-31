import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    trackId: "1143155",
    product: "Product 1",
    customer: "John Smith",
    date: "01.03",
    amount: 43,
    payment: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2,
    trackId: "2235235",
    product: "Product 2",
    customer: "John Smith",
    date: "01.03",
    amount: 5,
    payment: "Online Payment",
    status: "Approved",
  },
  {
    id: 3,
    trackId: "2342353",
    product: "Product 3",
    customer: "John Smith",
    date: "01.03",
    amount: 325,
    payment: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 4,
    trackId: "2357741",
    product: "Product 4",
    customer: "John Smith",
    date: "01.03",
    amount: 135,
    payment: "Online",
    status: "Pending",
  },
  {
    id: 5,
    trackId: "2342355",
    product: "Product 5",
    customer: "John Smith",
    date: "01.03",
    amount: 35,
    payment: "Online",
    status: "Approved",
  },
];

const columns = [
  { field: "trackId", headerName: "Tracking ID", width: 350 },
  { field: "product", headerName: "Product", width: 500 },
  { field: "customer", headerName: "Customer", width: 350 },
  { field: "date", headerName: "Date", width: 250 },
  { field: "amount", headerName: "Amount", width: 250 },
  { field: "payment", headerName: "Payment Method", width: 350 },
  {
    field: "status",
    headerName: "Status",
    width: 325,
    renderCell: (cellValues) => {
      return (
        <div
          className={
            cellValues.row.status === "Approved" ? "approved" : "pending"
          }
        >
          {cellValues.value}
        </div>
      );
    },
  },
];

const LatestProducts = () => {
  return (
    <div className="latest-products-container">
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className="latest-products-grid"
      />
    </div>
  );
};

export default LatestProducts;
