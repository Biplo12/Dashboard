import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "./../Components/Topbar/Topbar";
import { rows, columns } from "../DummyData/OrdersData";
import { DataGrid } from "@mui/x-data-grid";

const Orders = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="data-container">
        <DataGrid columns={columns} rows={rows} className="data-table" />
      </div>
    </>
  );
};

export default Orders;
