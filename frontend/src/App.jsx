import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Navbar/Nav";
import { Login } from "./components/Navbar/Login/Login";
import { RentCard } from "./components/Home/Rent/RentCard";
import { SaleCard } from "./components/Home/Sale/SaleCard";
import { DetailRent } from "./components/detailRent/DetailRent";
import { DetailSale } from "./components/detailSale/DetailSale";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Nav />

      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent-card" element={<RentCard />} />
          <Route path="/rent-card/:id" element={<DetailRent />} />

          <Route path="/sale-card" element={<SaleCard />} />
          <Route path="/sale-card/:id" element={<DetailSale />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
