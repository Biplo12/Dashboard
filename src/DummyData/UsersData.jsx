import { Link } from "react-router-dom";

export const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "picture",
    headerName: "Picture",
    width: 100,
    renderCell: (cellValues) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={cellValues.row.picture} alt="avatar" />
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
    picture: "https://robohash.org/enimnatusipsa.png?size=50x50&set=set1",
    full_name: "Hallie Gurney",
    first_name: "Hallie",
    last_name: "Gurney",
    username: "hgurney0",
    email: "hgurney0@dedecms.com",
    gender: "Female",
    age: 16,
    city: "Soe",
    status: "Passive",
  },
  {
    id: 2,
    picture: "https://robohash.org/corporissintut.png?size=50x50&set=set1",
    full_name: "Erinn Gertz",
    first_name: "Erinn",
    last_name: "Gertz",
    username: "egertz1",
    email: "egertz1@tinypic.com",
    gender: "Female",
    age: 19,
    city: "Pelym",
    status: "Active",
  },
  {
    id: 3,
    picture: "https://robohash.org/quietvoluptatem.png?size=50x50&set=set1",
    full_name: "Calv Sommerlie",
    first_name: "Calv",
    last_name: "Sommerlie",
    username: "csommerlie2",
    email: "csommerlie2@reverbnation.com",
    gender: "Male",
    age: 21,
    city: "Matabao",
    status: "Active",
  },
  {
    id: 4,
    picture: "https://robohash.org/eumetvoluptatibus.png?size=50x50&set=set1",
    full_name: "Danit McBean",
    first_name: "Danit",
    last_name: "McBean",
    username: "dmcbean3",
    email: "dmcbean3@google.ru",
    gender: "Female",
    age: 54,
    city: "Pok??j",
    status: "Active",
  },
  {
    id: 5,
    picture: "https://robohash.org/recusandaeillumnisi.png?size=50x50&set=set1",
    full_name: "Guillemette Soles",
    first_name: "Guillemette",
    last_name: "Soles",
    username: "gsoles4",
    email: "gsoles4@pcworld.com",
    gender: "Female",
    age: 50,
    city: "Manjacaze",
    status: "Active",
  },
  {
    id: 6,
    picture: "https://robohash.org/omnisabarchitecto.png?size=50x50&set=set1",
    full_name: "Cassi Varah",
    first_name: "Cassi",
    last_name: "Varah",
    username: "cvarah5",
    email: "cvarah5@ycombinator.com",
    gender: "Female",
    age: 38,
    city: "Ust???-Dzheguta",
    status: "Passive",
  },
  {
    id: 7,
    picture: "https://robohash.org/blanditiisipsamet.png?size=50x50&set=set1",
    full_name: "Merralee Scopham",
    first_name: "Merralee",
    last_name: "Scopham",
    username: "mscopham6",
    email: "mscopham6@cdc.gov",
    gender: "Female",
    age: 41,
    city: "Peranap",
    status: "Pending",
  },
  {
    id: 8,
    picture: "https://robohash.org/nequequoconsequatur.png?size=50x50&set=set1",
    full_name: "Blisse Lewton",
    first_name: "Blisse",
    last_name: "Lewton",
    username: "blewton7",
    email: "blewton7@admin.ch",
    gender: "Female",
    age: 16,
    city: "Wangping",
    status: "Pending",
  },
  {
    id: 9,
    picture:
      "https://robohash.org/natusvoluptatumexplicabo.png?size=50x50&set=set1",
    full_name: "Nonah Stobbs",
    first_name: "Nonah",
    last_name: "Stobbs",
    username: "nstobbs8",
    email: "nstobbs8@printfriendly.com",
    gender: "Genderfluid",
    age: 23,
    city: "Sa P??",
    status: "Passive",
  },
  {
    id: 10,
    picture: "https://robohash.org/nostrumeosat.png?size=50x50&set=set1",
    full_name: "Celinda Ranfield",
    first_name: "Celinda",
    last_name: "Ranfield",
    username: "cranfield9",
    email: "cranfield9@eepurl.com",
    gender: "Female",
    age: 37,
    city: "Lengkeng",
    status: "Active",
  },
  {
    id: 11,
    picture: "https://robohash.org/ettemporedoloribus.png?size=50x50&set=set1",
    full_name: "Lancelot de Mendoza",
    first_name: "Lancelot",
    last_name: "de Mendoza",
    username: "ldea",
    email: "ldea@oakley.com",
    gender: "Male",
    age: 52,
    city: "Forestville",
    status: "Pending",
  },
  {
    id: 12,
    picture:
      "https://robohash.org/omnisvoluptatemprovident.png?size=50x50&set=set1",
    full_name: "Hilarius Polfer",
    first_name: "Hilarius",
    last_name: "Polfer",
    username: "hpolferb",
    email: "hpolferb@discuz.net",
    gender: "Agender",
    age: 56,
    city: "Yinzhu",
    status: "Passive",
  },
  {
    id: 13,
    picture:
      "https://robohash.org/numquamnequesapiente.png?size=50x50&set=set1",
    full_name: "Sydney De Vaar",
    first_name: "Sydney",
    last_name: "De Vaar",
    username: "sdec",
    email: "sdec@sfgate.com",
    gender: "Male",
    age: 57,
    city: "Ivyanyets",
    status: "Active",
  },
  {
    id: 14,
    picture: "https://robohash.org/quisitblanditiis.png?size=50x50&set=set1",
    full_name: "Katlin Doulton",
    first_name: "Katlin",
    last_name: "Doulton",
    username: "kdoultond",
    email: "kdoultond@zimbio.com",
    gender: "Female",
    age: 25,
    city: "Doln?? Lhota",
    status: "Active",
  },
  {
    id: 15,
    picture:
      "https://robohash.org/exercitationemmaioresexplicabo.png?size=50x50&set=set1",
    full_name: "Ann Francillo",
    first_name: "Ann",
    last_name: "Francillo",
    username: "afrancilloe",
    email: "afrancilloe@rakuten.co.jp",
    gender: "Female",
    age: 40,
    city: "Bombardopolis",
    status: "Active",
  },
  {
    id: 16,
    picture: "https://robohash.org/numquametest.png?size=50x50&set=set1",
    full_name: "Keary Clemanceau",
    first_name: "Keary",
    last_name: "Clemanceau",
    username: "kclemanceauf",
    email: "kclemanceauf@cisco.com",
    gender: "Non-binary",
    age: 19,
    city: "Ferreiras",
    status: "Passive",
  },
  {
    id: 17,
    picture:
      "https://robohash.org/voluptatemimpeditsint.png?size=50x50&set=set1",
    full_name: "Bianca Gelderd",
    first_name: "Bianca",
    last_name: "Gelderd",
    username: "bgelderdg",
    email: "bgelderdg@comcast.net",
    gender: "Genderqueer",
    age: 54,
    city: "Aseri",
    status: "Pending",
  },
  {
    id: 18,
    picture: "https://robohash.org/velitquoaperiam.png?size=50x50&set=set1",
    full_name: "Grange Fronzek",
    first_name: "Grange",
    last_name: "Fronzek",
    username: "gfronzekh",
    email: "gfronzekh@hao123.com",
    gender: "Male",
    age: 56,
    city: "Komsomolets",
    status: "Passive",
  },
  {
    id: 19,
    picture:
      "https://robohash.org/repellendusaccusamusquis.png?size=50x50&set=set1",
    full_name: "Davis Flood",
    first_name: "Davis",
    last_name: "Flood",
    username: "dfloodi",
    email: "dfloodi@uiuc.edu",
    gender: "Male",
    age: 44,
    city: "Prawdzinski",
    status: "Passive",
  },
  {
    id: 20,
    picture:
      "https://robohash.org/utvoluptatemblanditiis.png?size=50x50&set=set1",
    full_name: "Barnie Rivett",
    first_name: "Barnie",
    last_name: "Rivett",
    username: "brivettj",
    email: "brivettj@taobao.com",
    gender: "Male",
    age: 34,
    city: "Sindangbarang",
    status: "Pending",
  },
  {
    id: 21,
    picture: "https://robohash.org/veritatisetqui.png?size=50x50&set=set1",
    full_name: "Kathryne Ottewell",
    first_name: "Kathryne",
    last_name: "Ottewell",
    username: "kottewellk",
    email: "kottewellk@networksolutions.com",
    gender: "Female",
    age: 21,
    city: "Waco",
    status: "Active",
  },
  {
    id: 22,
    picture: "https://robohash.org/quibusdamquiased.png?size=50x50&set=set1",
    full_name: "Ralf Jentges",
    first_name: "Ralf",
    last_name: "Jentges",
    username: "rjentgesl",
    email: "rjentgesl@friendfeed.com",
    gender: "Male",
    age: 26,
    city: "Kauman",
    status: "Active",
  },
  {
    id: 23,
    picture:
      "https://robohash.org/errorvoluptatemdistinctio.png?size=50x50&set=set1",
    full_name: "Charmian Earengey",
    first_name: "Charmian",
    last_name: "Earengey",
    username: "cearengeym",
    email: "cearengeym@admin.ch",
    gender: "Female",
    age: 47,
    city: "In??rida",
    status: "Active",
  },
  {
    id: 24,
    picture:
      "https://robohash.org/voluptatemeligendiipsam.png?size=50x50&set=set1",
    full_name: "Livvie Popham",
    first_name: "Livvie",
    last_name: "Popham",
    username: "lpophamn",
    email: "lpophamn@altervista.org",
    gender: "Female",
    age: 41,
    city: "Blois",
    status: "Pending",
  },
  {
    id: 25,
    picture: "https://robohash.org/sedteneturexplicabo.png?size=50x50&set=set1",
    full_name: "Xenia Keasley",
    first_name: "Xenia",
    last_name: "Keasley",
    username: "xkeasleyo",
    email: "xkeasleyo@archive.org",
    gender: "Female",
    age: 51,
    city: "G??ra Kalwaria",
    status: "Active",
  },
  {
    id: 26,
    picture: "https://robohash.org/estnamvoluptas.png?size=50x50&set=set1",
    full_name: "Fraser Hazelden",
    first_name: "Fraser",
    last_name: "Hazelden",
    username: "fhazeldenp",
    email: "fhazeldenp@jugem.jp",
    gender: "Male",
    age: 26,
    city: "Aleg",
    status: "Active",
  },
  {
    id: 27,
    picture: "https://robohash.org/velitquodmolestiae.png?size=50x50&set=set1",
    full_name: "Dorthy Atkyns",
    first_name: "Dorthy",
    last_name: "Atkyns",
    username: "datkynsq",
    email: "datkynsq@soup.io",
    gender: "Female",
    age: 21,
    city: "Taibai",
    status: "Pending",
  },
  {
    id: 28,
    picture: "https://robohash.org/sedautemab.png?size=50x50&set=set1",
    full_name: "Deena Hurler",
    first_name: "Deena",
    last_name: "Hurler",
    username: "dhurlerr",
    email: "dhurlerr@dailymail.co.uk",
    gender: "Female",
    age: 28,
    city: "Maukaro",
    status: "Active",
  },
  {
    id: 29,
    picture:
      "https://robohash.org/temporeaspernaturquisquam.png?size=50x50&set=set1",
    full_name: "Anne-corinne Lipsett",
    first_name: "Anne-corinne",
    last_name: "Lipsett",
    username: "alipsetts",
    email: "alipsetts@canalblog.com",
    gender: "Female",
    age: 23,
    city: "Lao Suea Kok",
    status: "Passive",
  },
  {
    id: 30,
    picture: "https://robohash.org/temporibuseaest.png?size=50x50&set=set1",
    full_name: "Gavan Jelf",
    first_name: "Gavan",
    last_name: "Jelf",
    username: "gjelft",
    email: "gjelft@bloomberg.com",
    gender: "Male",
    age: 48,
    city: "Goundi",
    status: "Pending",
  },
  {
    id: 31,
    picture: "https://robohash.org/quiasapienteiusto.png?size=50x50&set=set1",
    full_name: "Mitzi Hyndson",
    first_name: "Mitzi",
    last_name: "Hyndson",
    username: "mhyndsonu",
    email: "mhyndsonu@vk.com",
    gender: "Female",
    age: 20,
    city: "Klokot",
    status: "Passive",
  },
  {
    id: 32,
    picture: "https://robohash.org/quodignissimosin.png?size=50x50&set=set1",
    full_name: "Ken Fausset",
    first_name: "Ken",
    last_name: "Fausset",
    username: "kfaussetv",
    email: "kfaussetv@blogspot.com",
    gender: "Male",
    age: 58,
    city: "Guadalupe",
    status: "Active",
  },
  {
    id: 33,
    picture: "https://robohash.org/cumsintquod.png?size=50x50&set=set1",
    full_name: "Caitlin Gillespey",
    first_name: "Caitlin",
    last_name: "Gillespey",
    username: "cgillespeyw",
    email: "cgillespeyw@tinyurl.com",
    gender: "Female",
    age: 52,
    city: "Kristinehamn",
    status: "Passive",
  },
  {
    id: 34,
    picture: "https://robohash.org/etidomnis.png?size=50x50&set=set1",
    full_name: "Cristabel Westmacott",
    first_name: "Cristabel",
    last_name: "Westmacott",
    username: "cwestmacottx",
    email: "cwestmacottx@china.com.cn",
    gender: "Female",
    age: 26,
    city: "Carmelo",
    status: "Passive",
  },
  {
    id: 35,
    picture:
      "https://robohash.org/similiquesuscipitaccusantium.png?size=50x50&set=set1",
    full_name: "Jarrett Dzenisenka",
    first_name: "Jarrett",
    last_name: "Dzenisenka",
    username: "jdzenisenkay",
    email: "jdzenisenkay@comcast.net",
    gender: "Male",
    age: 32,
    city: "Yopal",
    status: "Passive",
  },
  {
    id: 36,
    picture: "https://robohash.org/nemocumquequi.png?size=50x50&set=set1",
    full_name: "Isabel Mathivat",
    first_name: "Isabel",
    last_name: "Mathivat",
    username: "imathivatz",
    email: "imathivatz@microsoft.com",
    gender: "Female",
    age: 19,
    city: "??vertorne??",
    status: "Pending",
  },
  {
    id: 37,
    picture: "https://robohash.org/faceresaepenesciunt.png?size=50x50&set=set1",
    full_name: "Isabelle Alfwy",
    first_name: "Isabelle",
    last_name: "Alfwy",
    username: "ialfwy10",
    email: "ialfwy10@stanford.edu",
    gender: "Female",
    age: 33,
    city: "G??ndara",
    status: "Active",
  },
  {
    id: 38,
    picture: "https://robohash.org/occaecatieaitaque.png?size=50x50&set=set1",
    full_name: "Eveleen Swanson",
    first_name: "Eveleen",
    last_name: "Swanson",
    username: "eswanson11",
    email: "eswanson11@instagram.com",
    gender: "Female",
    age: 57,
    city: "Si Prachan",
    status: "Active",
  },
  {
    id: 39,
    picture: "https://robohash.org/temporecorruptiiure.png?size=50x50&set=set1",
    full_name: "Dulcea De Brett",
    first_name: "Dulcea",
    last_name: "De Brett",
    username: "dde12",
    email: "dde12@hugedomains.com",
    gender: "Female",
    age: 47,
    city: "Giado",
    status: "Active",
  },
  {
    id: 40,
    picture: "https://robohash.org/ducimustemporedicta.png?size=50x50&set=set1",
    full_name: "Tabbie Pheazey",
    first_name: "Tabbie",
    last_name: "Pheazey",
    username: "tpheazey13",
    email: "tpheazey13@last.fm",
    gender: "Genderfluid",
    age: 57,
    city: "Ugljan",
    status: "Passive",
  },
  {
    id: 41,
    picture:
      "https://robohash.org/consequaturnihildebitis.png?size=50x50&set=set1",
    full_name: "Ingra Covell",
    first_name: "Ingra",
    last_name: "Covell",
    username: "icovell14",
    email: "icovell14@ed.gov",
    gender: "Male",
    age: 20,
    city: "Drawno",
    status: "Pending",
  },
  {
    id: 42,
    picture:
      "https://robohash.org/inventoreprovidentut.png?size=50x50&set=set1",
    full_name: "Ross Creedland",
    first_name: "Ross",
    last_name: "Creedland",
    username: "rcreedland15",
    email: "rcreedland15@1688.com",
    gender: "Polygender",
    age: 48,
    city: "J??w??",
    status: "Pending",
  },
  {
    id: 43,
    picture: "https://robohash.org/nonexplicabovel.png?size=50x50&set=set1",
    full_name: "Marlyn Matthaus",
    first_name: "Marlyn",
    last_name: "Matthaus",
    username: "mmatthaus16",
    email: "mmatthaus16@timesonline.co.uk",
    gender: "Female",
    age: 39,
    city: "San Jose",
    status: "Passive",
  },
  {
    id: 44,
    picture:
      "https://robohash.org/liberodelectusofficia.png?size=50x50&set=set1",
    full_name: "Donella Taggerty",
    first_name: "Donella",
    last_name: "Taggerty",
    username: "dtaggerty17",
    email: "dtaggerty17@oracle.com",
    gender: "Female",
    age: 46,
    city: "Porsgrunn",
    status: "Passive",
  },
  {
    id: 45,
    picture: "https://robohash.org/inventoreametvelit.png?size=50x50&set=set1",
    full_name: "Lutero Lucks",
    first_name: "Lutero",
    last_name: "Lucks",
    username: "llucks18",
    email: "llucks18@blogspot.com",
    gender: "Male",
    age: 21,
    city: "Garunggang",
    status: "Active",
  },
  {
    id: 46,
    picture: "https://robohash.org/eteaqueet.png?size=50x50&set=set1",
    full_name: "Andie Piggford",
    first_name: "Andie",
    last_name: "Piggford",
    username: "apiggford19",
    email: "apiggford19@fastcompany.com",
    gender: "Male",
    age: 16,
    city: "Donghe",
    status: "Pending",
  },
  {
    id: 47,
    picture:
      "https://robohash.org/reiciendisvoluptatescupiditate.png?size=50x50&set=set1",
    full_name: "Idaline Kadwallider",
    first_name: "Idaline",
    last_name: "Kadwallider",
    username: "ikadwallider1a",
    email: "ikadwallider1a@youtube.com",
    gender: "Female",
    age: 24,
    city: "P??voa",
    status: "Active",
  },
  {
    id: 48,
    picture: "https://robohash.org/quibusdamestculpa.png?size=50x50&set=set1",
    full_name: "Lucian Kiossel",
    first_name: "Lucian",
    last_name: "Kiossel",
    username: "lkiossel1b",
    email: "lkiossel1b@barnesandnoble.com",
    gender: "Male",
    age: 41,
    city: "Oklahoma City",
    status: "Pending",
  },
  {
    id: 49,
    picture: "https://robohash.org/veritatisetqui.png?size=50x50&set=set1",
    full_name: "Guillaume Rookes",
    first_name: "Guillaume",
    last_name: "Rookes",
    username: "grookes1c",
    email: "grookes1c@aol.com",
    gender: "Male",
    age: 25,
    city: "Jiulong",
    status: "Passive",
  },
  {
    id: 50,
    picture: "https://robohash.org/doloremquequaehic.png?size=50x50&set=set1",
    full_name: "Nichole Mackstead",
    first_name: "Nichole",
    last_name: "Mackstead",
    username: "nmackstead1d",
    email: "nmackstead1d@bizjournals.com",
    gender: "Female",
    age: 30,
    city: "Viangxai",
    status: "Passive",
  },
];
