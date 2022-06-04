import { Link } from "react-router-dom";

export const columns = [
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
  { field: "product", headerName: "Product", width: 150 },
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
          className={cellValues.row.status === "Available" ? "green" : "red"}
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

export const rows = [
  {
    id: 1,
    product_image:
      "https://robohash.org/sedquisquameligendi.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Pink",
    size: "L",
    price: "$209.39",
    amount: 87,
    total_sales: "$2859.88",
    status: "Sold",
  },
  {
    id: 2,
    product_image:
      "https://robohash.org/eumquaeratveritatis.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Fuscia",
    size: "XL",
    price: "$185.02",
    amount: 59,
    total_sales: "$781.09",
    status: "Sold",
  },
  {
    id: 3,
    product_image: "https://robohash.org/etliberoillum.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Khaki",
    size: "M",
    price: "$173.42",
    amount: 36,
    total_sales: "$1705.39",
    status: "Sold",
  },
  {
    id: 4,
    product_image:
      "https://robohash.org/ametnullaitaque.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Yellow",
    size: "3XL",
    price: "$152.29",
    amount: 30,
    total_sales: "$1202.39",
    status: "Sold",
  },
  {
    id: 5,
    product_image:
      "https://robohash.org/velitquaeratsoluta.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Orange",
    size: "XL",
    price: "$169.36",
    amount: 59,
    total_sales: "$2137.63",
    status: "Available",
  },
  {
    id: 6,
    product_image: "https://robohash.org/etdolorut.png?size=50x50&set=set1",
    product: "shorts",
    color: "Purple",
    size: "XS",
    price: "$270.95",
    amount: 10,
    total_sales: "$1554.03",
    status: "Sold",
  },
  {
    id: 7,
    product_image: "https://robohash.org/velautemsed.png?size=50x50&set=set1",
    product: "shorts",
    color: "Maroon",
    size: "3XL",
    price: "$119.00",
    amount: 80,
    total_sales: "$1094.78",
    status: "Sold",
  },
  {
    id: 8,
    product_image: "https://robohash.org/idinciduntaut.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Green",
    size: "2XL",
    price: "$207.20",
    amount: 40,
    total_sales: "$1410.76",
    status: "Sold",
  },
  {
    id: 9,
    product_image:
      "https://robohash.org/quaeratiurequi.png?size=50x50&set=set1",
    product: "shorts",
    color: "Yellow",
    size: "XS",
    price: "$96.73",
    amount: 22,
    total_sales: "$356.65",
    status: "Sold",
  },
  {
    id: 10,
    product_image:
      "https://robohash.org/vitaeperspiciatisoptio.png?size=50x50&set=set1",
    product: "shorts",
    color: "Purple",
    size: "XS",
    price: "$182.62",
    amount: 13,
    total_sales: "$2648.00",
    status: "Sold",
  },
  {
    id: 11,
    product_image:
      "https://robohash.org/omnisdoloremmolestiae.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Pink",
    size: "XS",
    price: "$104.60",
    amount: 79,
    total_sales: "$1481.17",
    status: "Sold",
  },
  {
    id: 12,
    product_image:
      "https://robohash.org/suntvoluptaset.png?size=50x50&set=set1",
    product: "shorts",
    color: "Yellow",
    size: "S",
    price: "$174.26",
    amount: 60,
    total_sales: "$2813.12",
    status: "Sold",
  },
  {
    id: 13,
    product_image: "https://robohash.org/autemquiaquia.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Red",
    size: "XL",
    price: "$212.04",
    amount: 22,
    total_sales: "$1315.75",
    status: "Available",
  },
  {
    id: 14,
    product_image:
      "https://robohash.org/recusandaesapientequam.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Teal",
    size: "S",
    price: "$73.65",
    amount: 90,
    total_sales: "$759.45",
    status: "Sold",
  },
  {
    id: 15,
    product_image:
      "https://robohash.org/eosquisimilique.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Indigo",
    size: "2XL",
    price: "$12.80",
    amount: 95,
    total_sales: "$1370.51",
    status: "Sold",
  },
  {
    id: 16,
    product_image:
      "https://robohash.org/vitaepraesentiumdoloribus.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Purple",
    size: "L",
    price: "$188.39",
    amount: 7,
    total_sales: "$966.69",
    status: "Sold",
  },
  {
    id: 17,
    product_image: "https://robohash.org/undeautculpa.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Violet",
    size: "XS",
    price: "$201.08",
    amount: 2,
    total_sales: "$1593.88",
    status: "Available",
  },
  {
    id: 18,
    product_image:
      "https://robohash.org/voluptatumnisiquo.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Pink",
    size: "XL",
    price: "$97.43",
    amount: 62,
    total_sales: "$2010.60",
    status: "Sold",
  },
  {
    id: 19,
    product_image: "https://robohash.org/ettemporemodi.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Indigo",
    size: "L",
    price: "$54.46",
    amount: 72,
    total_sales: "$1381.20",
    status: "Available",
  },
  {
    id: 20,
    product_image:
      "https://robohash.org/ducimusveniamrerum.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Maroon",
    size: "S",
    price: "$49.14",
    amount: 28,
    total_sales: "$1708.11",
    status: "Available",
  },
  {
    id: 21,
    product_image:
      "https://robohash.org/voluptatummaioresperferendis.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Puce",
    size: "XS",
    price: "$136.71",
    amount: 35,
    total_sales: "$1314.30",
    status: "Available",
  },
  {
    id: 22,
    product_image:
      "https://robohash.org/nesciuntautemut.png?size=50x50&set=set1",
    product: "shorts",
    color: "Blue",
    size: "S",
    price: "$63.64",
    amount: 6,
    total_sales: "$1634.24",
    status: "Available",
  },
  {
    id: 23,
    product_image:
      "https://robohash.org/doloremquedignissimosesse.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Green",
    size: "3XL",
    price: "$15.23",
    amount: 38,
    total_sales: "$559.28",
    status: "Sold",
  },
  {
    id: 24,
    product_image:
      "https://robohash.org/iurererumpariatur.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Goldenrod",
    size: "XS",
    price: "$93.20",
    amount: 60,
    total_sales: "$1056.52",
    status: "Available",
  },
  {
    id: 25,
    product_image:
      "https://robohash.org/maximedoloremaut.png?size=50x50&set=set1",
    product: "shorts",
    color: "Maroon",
    size: "2XL",
    price: "$35.40",
    amount: 23,
    total_sales: "$1596.11",
    status: "Sold",
  },
  {
    id: 26,
    product_image:
      "https://robohash.org/doloremsedarchitecto.png?size=50x50&set=set1",
    product: "shorts",
    color: "Purple",
    size: "L",
    price: "$296.75",
    amount: 72,
    total_sales: "$2103.14",
    status: "Sold",
  },
  {
    id: 27,
    product_image:
      "https://robohash.org/quioccaecativeritatis.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Purple",
    size: "2XL",
    price: "$45.37",
    amount: 62,
    total_sales: "$1818.06",
    status: "Available",
  },
  {
    id: 28,
    product_image:
      "https://robohash.org/doloremnonlibero.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Goldenrod",
    size: "2XL",
    price: "$219.85",
    amount: 69,
    total_sales: "$808.16",
    status: "Available",
  },
  {
    id: 29,
    product_image:
      "https://robohash.org/laborumenimatque.png?size=50x50&set=set1",
    product: "shorts",
    color: "Violet",
    size: "S",
    price: "$179.90",
    amount: 69,
    total_sales: "$862.04",
    status: "Available",
  },
  {
    id: 30,
    product_image:
      "https://robohash.org/voluptatibuscumqueet.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Turquoise",
    size: "3XL",
    price: "$158.22",
    amount: 52,
    total_sales: "$2709.44",
    status: "Available",
  },
  {
    id: 31,
    product_image:
      "https://robohash.org/perferendisinvoluptas.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Yellow",
    size: "XL",
    price: "$179.51",
    amount: 62,
    total_sales: "$682.21",
    status: "Sold",
  },
  {
    id: 32,
    product_image: "https://robohash.org/utetnatus.png?size=50x50&set=set1",
    product: "shorts",
    color: "Red",
    size: "L",
    price: "$74.34",
    amount: 28,
    total_sales: "$464.31",
    status: "Sold",
  },
  {
    id: 33,
    product_image:
      "https://robohash.org/debitisquasirerum.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Turquoise",
    size: "XL",
    price: "$285.16",
    amount: 95,
    total_sales: "$2460.77",
    status: "Sold",
  },
  {
    id: 34,
    product_image:
      "https://robohash.org/temporevelitharum.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Fuscia",
    size: "L",
    price: "$41.05",
    amount: 33,
    total_sales: "$1938.21",
    status: "Sold",
  },
  {
    id: 35,
    product_image: "https://robohash.org/autemvelitab.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Yellow",
    size: "XS",
    price: "$294.77",
    amount: 90,
    total_sales: "$545.47",
    status: "Sold",
  },
  {
    id: 36,
    product_image:
      "https://robohash.org/fugiateiusvelit.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Turquoise",
    size: "XL",
    price: "$210.81",
    amount: 81,
    total_sales: "$2935.52",
    status: "Available",
  },
  {
    id: 37,
    product_image:
      "https://robohash.org/beataedistinctioullam.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Goldenrod",
    size: "3XL",
    price: "$125.10",
    amount: 53,
    total_sales: "$2140.97",
    status: "Sold",
  },
  {
    id: 38,
    product_image:
      "https://robohash.org/earumquiavelit.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Pink",
    size: "2XL",
    price: "$63.93",
    amount: 17,
    total_sales: "$2109.99",
    status: "Sold",
  },
  {
    id: 39,
    product_image: "https://robohash.org/vitaeetet.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Mauv",
    size: "3XL",
    price: "$295.83",
    amount: 9,
    total_sales: "$1042.02",
    status: "Sold",
  },
  {
    id: 40,
    product_image:
      "https://robohash.org/veniamseddignissimos.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Fuscia",
    size: "M",
    price: "$253.94",
    amount: 43,
    total_sales: "$2935.37",
    status: "Sold",
  },
  {
    id: 41,
    product_image: "https://robohash.org/undeomnisquo.png?size=50x50&set=set1",
    product: "shorts",
    color: "Puce",
    size: "L",
    price: "$57.52",
    amount: 12,
    total_sales: "$2794.18",
    status: "Available",
  },
  {
    id: 42,
    product_image:
      "https://robohash.org/quisquamvoluptatesquam.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Yellow",
    size: "S",
    price: "$245.20",
    amount: 22,
    total_sales: "$1262.56",
    status: "Available",
  },
  {
    id: 43,
    product_image:
      "https://robohash.org/explicaboconsequaturvoluptate.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Teal",
    size: "S",
    price: "$77.13",
    amount: 52,
    total_sales: "$2384.82",
    status: "Sold",
  },
  {
    id: 44,
    product_image: "https://robohash.org/eafaceresint.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Teal",
    size: "M",
    price: "$26.20",
    amount: 17,
    total_sales: "$2184.67",
    status: "Sold",
  },
  {
    id: 45,
    product_image:
      "https://robohash.org/praesentiumprovidentquos.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Puce",
    size: "3XL",
    price: "$269.82",
    amount: 7,
    total_sales: "$331.00",
    status: "Available",
  },
  {
    id: 46,
    product_image: "https://robohash.org/nonsolutanam.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Purple",
    size: "M",
    price: "$70.48",
    amount: 38,
    total_sales: "$293.72",
    status: "Available",
  },
  {
    id: 47,
    product_image:
      "https://robohash.org/quaedictarepellendus.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Yellow",
    size: "XS",
    price: "$133.49",
    amount: 57,
    total_sales: "$2937.84",
    status: "Sold",
  },
  {
    id: 48,
    product_image: "https://robohash.org/quisetet.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Pink",
    size: "3XL",
    price: "$283.39",
    amount: 83,
    total_sales: "$377.70",
    status: "Available",
  },
  {
    id: 49,
    product_image:
      "https://robohash.org/quifacilisvitae.png?size=50x50&set=set1",
    product: "t-shirt",
    color: "Aquamarine",
    size: "L",
    price: "$181.78",
    amount: 20,
    total_sales: "$2226.56",
    status: "Available",
  },
  {
    id: 50,
    product_image:
      "https://robohash.org/eaqueveniamquos.png?size=50x50&set=set1",
    product: "hoodie",
    color: "Indigo",
    size: "S",
    price: "$126.48",
    amount: 68,
    total_sales: "$1924.29",
    status: "Available",
  },
];
