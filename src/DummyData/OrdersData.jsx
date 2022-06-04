import { Link } from "react-router-dom";

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
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/orders/test">
            <div className="viewButton">View</div>
          </Link>
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
  {
    id: 1646555,
    product_image:
      "https://robohash.org/etquispossimus.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Scarlett Espinal",
    date: "9/14/2021",
    amount: 20,
    payment: "Online Payment",
    total_price: "$943.77",
    status: "Approved",
  },
  {
    id: 1504099,
    product_image:
      "https://robohash.org/explicabonullaerror.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Artie Sign",
    date: "3/12/2021",
    amount: 37,
    payment: "Online Payment",
    total_price: "$949.43",
    status: "Pending",
  },
  {
    id: 2148120,
    product_image:
      "https://robohash.org/nihilbeataeconsequatur.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Durward Locard",
    date: "8/15/2021",
    amount: 83,
    payment: "Online Payment",
    total_price: "$716.54",
    status: "Approved",
  },
  {
    id: 2316891,
    product_image: "https://robohash.org/fugiatnobiset.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Hollis Ince",
    date: "11/16/2020",
    amount: 37,
    payment: "Online Payment",
    total_price: "$210.48",
    status: "Approved",
  },
  {
    id: 2035458,
    product_image:
      "https://robohash.org/impeditquismolestiae.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Daryle Reinger",
    date: "1/16/2022",
    amount: 52,
    payment: "Cash on Delivery",
    total_price: "$849.86",
    status: "Denied",
  },
  {
    id: 1609253,
    product_image:
      "https://robohash.org/praesentiumnumquamnon.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Hertha Badam",
    date: "3/8/2021",
    amount: 60,
    payment: "Online Payment",
    total_price: "$53.53",
    status: "Denied",
  },
  {
    id: 2058483,
    product_image:
      "https://robohash.org/quaeratmagnamdignissimos.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Jade Wollen",
    date: "1/2/2022",
    amount: 91,
    payment: "Cash on Delivery",
    total_price: "$499.23",
    status: "Pending",
  },
  {
    id: 1967607,
    product_image:
      "https://robohash.org/etillumconsectetur.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Minnaminnie Songhurst",
    date: "12/18/2021",
    amount: 19,
    payment: "Cash on Delivery",
    total_price: "$508.56",
    status: "Pending",
  },
  {
    id: 1897111,
    product_image: "https://robohash.org/adhicsuscipit.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Mario Learmont",
    date: "12/9/2020",
    amount: 17,
    payment: "Cash on Delivery",
    total_price: "$190.92",
    status: "Denied",
  },
  {
    id: 2242815,
    product_image:
      "https://robohash.org/etesseexpedita.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Chic Pahlsson",
    date: "9/2/2021",
    amount: 69,
    payment: "Online Payment",
    total_price: "$720.64",
    status: "Approved",
  },
  {
    id: 1369619,
    product_image:
      "https://robohash.org/doloreametreiciendis.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Millisent Culleton",
    date: "12/27/2021",
    amount: 60,
    payment: "Online Payment",
    total_price: "$690.15",
    status: "Pending",
  },
  {
    id: 1520301,
    product_image:
      "https://robohash.org/repudiandaeeumquisquam.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Charin Sear",
    date: "6/15/2021",
    amount: 18,
    payment: "Online Payment",
    total_price: "$675.14",
    status: "Approved",
  },
  {
    id: 1741506,
    product_image:
      "https://robohash.org/ametnamcorrupti.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Marleah Livsey",
    date: "9/8/2021",
    amount: 24,
    payment: "Online Payment",
    total_price: "$59.40",
    status: "Denied",
  },
  {
    id: 1852274,
    product_image:
      "https://robohash.org/maximeautemillo.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Maynord Cauthra",
    date: "1/4/2021",
    amount: 48,
    payment: "Online Payment",
    total_price: "$664.71",
    status: "Denied",
  },
  {
    id: 1762217,
    product_image:
      "https://robohash.org/essedoloredeleniti.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Roderick Struan",
    date: "4/8/2022",
    amount: 83,
    payment: "Cash on Delivery",
    total_price: "$504.09",
    status: "Denied",
  },
  {
    id: 2092510,
    product_image:
      "https://robohash.org/laudantiumsedquas.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Dall Syder",
    date: "10/4/2021",
    amount: 52,
    payment: "Online Payment",
    total_price: "$329.76",
    status: "Pending",
  },
  {
    id: 2167944,
    product_image:
      "https://robohash.org/omnisipsamiusto.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Luca Evens",
    date: "12/3/2021",
    amount: 79,
    payment: "Cash on Delivery",
    total_price: "$999.26",
    status: "Pending",
  },
  {
    id: 1881884,
    product_image:
      "https://robohash.org/architectovoluptasiste.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Creight Gabel",
    date: "9/24/2021",
    amount: 36,
    payment: "Cash on Delivery",
    total_price: "$448.48",
    status: "Approved",
  },
  {
    id: 2244822,
    product_image: "https://robohash.org/auttotamut.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Antonin Merington",
    date: "4/29/2021",
    amount: 19,
    payment: "Online Payment",
    total_price: "$793.59",
    status: "Approved",
  },
  {
    id: 1558220,
    product_image:
      "https://robohash.org/fugatemporibusin.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Temp Sawnwy",
    date: "12/13/2020",
    amount: 29,
    payment: "Cash on Delivery",
    total_price: "$797.79",
    status: "Pending",
  },
  {
    id: 1771836,
    product_image:
      "https://robohash.org/nequeattempora.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Sibeal Ramirez",
    date: "9/15/2021",
    amount: 56,
    payment: "Online Payment",
    total_price: "$561.36",
    status: "Approved",
  },
  {
    id: 1881317,
    product_image:
      "https://robohash.org/reiciendisdolorumcommodi.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Carling Geleman",
    date: "12/10/2021",
    amount: 91,
    payment: "Cash on Delivery",
    total_price: "$604.25",
    status: "Pending",
  },
  {
    id: 2339838,
    product_image: "https://robohash.org/utoptiout.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Hurley Wiszniewski",
    date: "5/27/2021",
    amount: 85,
    payment: "Online Payment",
    total_price: "$93.99",
    status: "Denied",
  },
  {
    id: 1803236,
    product_image:
      "https://robohash.org/beataeidconsequatur.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Sherline Race",
    date: "4/19/2022",
    amount: 97,
    payment: "Online Payment",
    total_price: "$628.64",
    status: "Denied",
  },
  {
    id: 2006096,
    product_image: "https://robohash.org/velfuganon.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Annabela Gabbidon",
    date: "3/18/2022",
    amount: 83,
    payment: "Online Payment",
    total_price: "$977.73",
    status: "Approved",
  },
  {
    id: 1791375,
    product_image: "https://robohash.org/etinqui.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Harvey Cattrell",
    date: "5/31/2021",
    amount: 84,
    payment: "Cash on Delivery",
    total_price: "$207.74",
    status: "Denied",
  },
  {
    id: 1648691,
    product_image:
      "https://robohash.org/omnisoccaecatieum.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Lilly McQuirk",
    date: "2/12/2021",
    amount: 85,
    payment: "Online Payment",
    total_price: "$773.22",
    status: "Approved",
  },
  {
    id: 1619733,
    product_image: "https://robohash.org/etnonquo.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Zelig Robiot",
    date: "7/26/2021",
    amount: 66,
    payment: "Cash on Delivery",
    total_price: "$765.66",
    status: "Denied",
  },
  {
    id: 1468233,
    product_image:
      "https://robohash.org/voluptatumharumat.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Ozzie Tortice",
    date: "4/12/2021",
    amount: 89,
    payment: "Cash on Delivery",
    total_price: "$565.84",
    status: "Denied",
  },
  {
    id: 2314396,
    product_image:
      "https://robohash.org/voluptatibusreprehenderitquae.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Townsend Manger",
    date: "3/11/2021",
    amount: 96,
    payment: "Online Payment",
    total_price: "$276.66",
    status: "Denied",
  },
  {
    id: 2158026,
    product_image:
      "https://robohash.org/doloreminusquos.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Chanda Swendell",
    date: "1/11/2021",
    amount: 60,
    payment: "Cash on Delivery",
    total_price: "$803.41",
    status: "Approved",
  },
  {
    id: 2142499,
    product_image: "https://robohash.org/solutaetenim.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Leticia Filinkov",
    date: "4/16/2021",
    amount: 91,
    payment: "Online Payment",
    total_price: "$412.65",
    status: "Denied",
  },
  {
    id: 1770475,
    product_image: "https://robohash.org/nonvelqui.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Vinnie O'Lunney",
    date: "11/27/2020",
    amount: 68,
    payment: "Online Payment",
    total_price: "$813.38",
    status: "Approved",
  },
  {
    id: 1825738,
    product_image: "https://robohash.org/undequoomnis.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Duffy Paynter",
    date: "5/23/2021",
    amount: 23,
    payment: "Cash on Delivery",
    total_price: "$705.66",
    status: "Approved",
  },
  {
    id: 1879036,
    product_image:
      "https://robohash.org/deseruntdolorumaut.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Garret Beck",
    date: "12/7/2020",
    amount: 5,
    payment: "Online Payment",
    total_price: "$521.27",
    status: "Pending",
  },
  {
    id: 1419849,
    product_image:
      "https://robohash.org/facereomnisminima.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Nariko Oganian",
    date: "9/10/2021",
    amount: 36,
    payment: "Online Payment",
    total_price: "$680.59",
    status: "Approved",
  },
  {
    id: 2129443,
    product_image:
      "https://robohash.org/reiciendisabid.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Conroy Laverenz",
    date: "3/18/2021",
    amount: 87,
    payment: "Cash on Delivery",
    total_price: "$604.93",
    status: "Pending",
  },
  {
    id: 2119043,
    product_image:
      "https://robohash.org/placeatcupiditateest.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Dulce Cherrett",
    date: "7/16/2021",
    amount: 25,
    payment: "Online Payment",
    total_price: "$202.14",
    status: "Approved",
  },
  {
    id: 1586985,
    product_image:
      "https://robohash.org/accusamusatqueratione.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Hoyt Learie",
    date: "10/18/2021",
    amount: 75,
    payment: "Online Payment",
    total_price: "$164.43",
    status: "Denied",
  },
  {
    id: 2350230,
    product_image:
      "https://robohash.org/inventorequisquamautem.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Jereme Pleasaunce",
    date: "6/23/2021",
    amount: 81,
    payment: "Cash on Delivery",
    total_price: "$486.41",
    status: "Approved",
  },
  {
    id: 2106760,
    product_image:
      "https://robohash.org/recusandaesuntasperiores.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Ashien Tresvina",
    date: "5/18/2022",
    amount: 3,
    payment: "Online Payment",
    total_price: "$918.19",
    status: "Denied",
  },
  {
    id: 1592251,
    product_image:
      "https://robohash.org/cupiditatesiteos.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Brynn Spellecy",
    date: "6/6/2021",
    amount: 77,
    payment: "Online Payment",
    total_price: "$356.99",
    status: "Pending",
  },
  {
    id: 1873867,
    product_image: "https://robohash.org/quinisiullam.png?size=50x50&set=set1",
    product: "hoodie",
    customer: "Myrtie Toulamain",
    date: "1/22/2022",
    amount: 46,
    payment: "Cash on Delivery",
    total_price: "$831.61",
    status: "Approved",
  },
  {
    id: 1671327,
    product_image:
      "https://robohash.org/consequaturveltenetur.png?size=50x50&set=set1",
    product: "shorts",
    customer: "Beth Cathcart",
    date: "1/13/2022",
    amount: 99,
    payment: "Online Payment",
    total_price: "$290.26",
    status: "Pending",
  },
  {
    id: 1443721,
    product_image:
      "https://robohash.org/ducimusprovidentlabore.png?size=50x50&set=set1",
    product: "t-shirt",
    customer: "Katalin Angelini",
    date: "5/9/2021",
    amount: 32,
    payment: "Cash on Delivery",
    total_price: "$235.58",
    status: "Approved",
  },
];
