import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import "./Components/Styles/__globalStyles.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
