import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "./../Components/Topbar/Topbar";
import { Link } from "react-router-dom";
import { rows, columns } from "../DummyData/ProductsData";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
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
          checkboxSelection
          className="data-table"
        />
      </div>
    </>
  );
};

export default Users;
