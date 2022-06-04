export const columns = [
  { field: "id", headerName: "Tracking ID", width: 100 },
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
  { field: "product", headerName: "Product", width: 150 },
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "amount", headerName: "Amount", width: 150 },
  {
    field: "payment",
    headerName: "Payment Method",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <div
          className={
            cellValues.row.payment === "Online Payment" ? "green" : "yellow"
          }
        >
          {cellValues.value}
        </div>
      );
    },
  },
  {
    field: "total_price",
    headerName: "Total Price",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <div
          className={
            cellValues.row.status === "Approved"
              ? "green"
              : cellValues.row.status === "Pending"
              ? "yellow"
              : "red"
          }
        >
          {cellValues.value}
        </div>
      );
    },
  },
];

export const rows = [
  {
    id: 1988259,
    product_image: "https://robohash.org/undequodculpa.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Nettle Dederich",
    date: "2/14/2022",
    amount: 60,
    payment: "Online Payment",
    total_price: "$692.05",
    status: "Approved",
  },
  {
    id: 1597927,
    product_image:
      "https://robohash.org/quodessemaxime.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Atalanta Bridges",
    date: "5/5/2021",
    amount: 52,
    payment: "Online Payment",
    total_price: "$430.02",
    status: "Approved",
  },
  {
    id: 1655422,
    product_image: "https://robohash.org/fugaetullam.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Meta Hallawell",
    date: "11/27/2020",
    amount: 15,
    payment: "Cash on Delivery",
    total_price: "$687.85",
    status: "Approved",
  },
  {
    id: 1803532,
    product_image: "https://robohash.org/etetnesciunt.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Thibaud Klemenz",
    date: "12/15/2021",
    amount: 41,
    payment: "Cash on Delivery",
    total_price: "$866.13",
    status: "Approved",
  },
  {
    id: 1731995,
    product_image:
      "https://robohash.org/remautquisquam.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Cheston Karel",
    date: "7/5/2021",
    amount: 11,
    payment: "Online Payment",
    total_price: "$408.38",
    status: "Denied",
  },
];
