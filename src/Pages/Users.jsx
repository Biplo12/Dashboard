import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "./../Components/Topbar";
import { userColumns, userRows } from "./UsersData";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
const Users = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="users-container">
        <div className="users-table">
          <DataGrid
            columns={userColumns.concat(actionColumn)}
            rows={data}
            pageSize={5}
            rowsPerPageOptions={[9]}
            selectionModel="true"
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
};

export default Users;
