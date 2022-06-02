import { Link } from "react-router-dom";
export const rows = [
  {
    id: 1,
    trackId: "1143155",
    product_image:
      "https://robohash.org/omnisabarchitecto.png?size=50x50&set=set1",
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
    product_image:
      "https://robohash.org/blanditiisipsamet.png?size=50x50&set=set1",
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
    product_image: "https://robohash.org/quisquamquia.png?size=50x50&set=set1",
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
    product_image:
      "https://robohash.org/natusvoluptatumexplicabo.png?size=50x50&set=set1",
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
    product_image: "https://robohash.org/nostrumeosat.png?size=50x50&set=set1",
    product: "Product 5",
    customer: "John Smith",
    date: "01.03",
    amount: 35,
    payment: "Online",
    status: "Approved",
  },
];

export const columns = [
  { field: "trackId", headerName: "Tracking ID", width: 150 },
  {
    field: "product_image",
    headerName: "Product Image",
    width: 200,
    renderCell: (cellValues) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={cellValues.row.product_image}
            alt="product"
          />
        </div>
      );
    },
  },
  { field: "product", headerName: "Product", width: 200 },
  { field: "customer", headerName: "Customer", width: 200 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "amount", headerName: "Amount", width: 100 },
  { field: "payment", headerName: "Payment Method", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
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
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (cellValues) => {
      return (
        <Link to="/products/test">
          <div className="viewButton">View</div>
        </Link>
      );
    },
  },
];
