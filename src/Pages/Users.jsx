import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "./../Components/Topbar";
import { Link } from "react-router-dom";
import { rows } from "../DummyData/UsersData";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
  const [data, setData] = useState(rows);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "picture",
      headerName: "Picture",
      width: 100,
      renderCell: (cellValues) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src={cellValues.row.picture}
              alt="avatar"
            />
          </div>
        );
      },
    },
    { field: "full_name", headerName: "Full Name", width: 200 },
    { field: "first_name", headerName: "First Name", width: 200 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "city", headerName: "City", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <div
            className={
              cellValues.row.status === "Active"
                ? "active"
                : cellValues.row.status === "Pending"
                ? "pending"
                : "passive"
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
      renderCell: (cellValues) => {
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
      <Sidebar className="sidebar-item" />
      <Topbar />
      <div className="users-container">
        <div className="users-table-header">
          <h2>Add New User</h2>
          <Link to="newUser">Add New</Link>
        </div>
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={[30]}
          checkboxSelection
          className="users-table"
        />
      </div>
    </>
  );
};

export default Users;
