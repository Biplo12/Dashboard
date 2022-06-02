import Sidebar from "../Components/Sidebar";
import Topbar from "./../Components/Topbar";
import { Link } from "react-router-dom";
import { rows } from "../DummyData/ProductsData";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "product_image",
      headerName: "Product Image",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={cellValues.row.product_image}
              alt="avatar"
            />
          </div>
        );
      },
    },
    { field: "product_name", headerName: "Product name", width: 150 },
    { field: "color", headerName: "Color", width: 150 },
    { field: "size", headerName: "Size", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "total_sales", headerName: "Total Sales", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <div
            className={
              cellValues.row.status === "Available" ? "available" : "sold"
            }
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="data-container">
        <div className="data-table-header">
          <h2>Add New Product</h2>
          <Link to="newProduct">Add New</Link>
        </div>
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={[30]}
          checkboxSelection
          className="data-table"
        />
      </div>
    </>
  );
};

export default Users;
