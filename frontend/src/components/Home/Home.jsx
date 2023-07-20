import React, { useEffect, useState } from "react";
import "./home.css";
import { RentHomeList } from "../RentHomeList/RentHomeList";
import { SaleHomeList } from "../SaleHomeList/SaleHomeList";
import { Footer } from "../Footer/Footer";
import { Team } from "../Team/Team";
import { Result } from "../Result/Result";
import { forRent, forSale } from "../../data/data";

export const Home = () => {
  // search

  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [livingSpace, setLivingSpace] = useState("");
  const [rentOrSale, setRentOrSale] = useState("");

  const [filteredRentList, setFilteredRentList] = useState(forRent);
  const [filteredSaleList, setFilteredSaleList] = useState(forSale);
  const handleSearch = () => {
    // Filter forRent array based on input criteria
    const filteredRent = forRent.filter((property) => {
      return (
        property.location.toLowerCase().includes(city.toLowerCase()) &&
        property.type.toLowerCase().includes(propertyType.toLowerCase()) &&
        parseInt(property.pricePerMonth.slice(1).replace(",", "")) <=
          parseInt(priceRange) &&
        property.m2 >= parseInt(livingSpace) &&
        property.type.toLowerCase().includes(rentOrSale.toLowerCase())
      );
    });

    // Filter forSale array based on input criteria
    const filteredSale = forSale.filter((property) => {
      return (
        property.location.toLowerCase().includes(city.toLowerCase()) &&
        property.type.toLowerCase().includes(propertyType.toLowerCase()) &&
        parseInt(property.price.slice(1).replace(",", "")) <=
          parseInt(priceRange) &&
        property.m2 >= parseInt(livingSpace) &&
        property.type.toLowerCase().includes(rentOrSale.toLowerCase())
      );
    });

    // Set the filtered arrays to the state
    setFilteredRentList(filteredRent);
    setFilteredSaleList(filteredSale);
  };

  // scroll down
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById("Home");

      if (scrollButton) {
        if (window.scrollY > 10) {
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="home">
      <div className="search-title">
        <h1>SEARCH FOR NEXT HOME</h1>
        <h3>Find new and featured property located in your local city</h3>

        <div className="search">
          <div className="search-property flex">
            <label>City</label>
            <br />
            <input
              type="text"
              id="city"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="search-property">
            <span>Property Type</span>
            <br />
            <input
              type="text"
              id="property-type"
              placeholder="property type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            />
          </div>

          <div className="search-property">
            <span>Price Range (Max)</span>
            <br />
            <input
              type="number"
              id="price-range"
              placeholder="price Range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>

          <div className="search-property">
            <span>Living Space (m2)</span>
            <br />
            <input
              type="number"
              id="living-space"
              placeholder="livingSpace"
              value={livingSpace}
              onChange={(e) => setLivingSpace(e.target.value)}
            />
          </div>

          <div className="search-property">
            <span>Rent / Sale</span>
            <br />
            <input
              type="text"
              id="living-space"
              placeholder="Rent or Sale"
              value={rentOrSale}
              onChange={(e) => setRentOrSale(e.target.value)}
            />
          </div>

          <div className="search-property  button-container">
            <button className="btn-search" onClick={handleSearch}>
              <i className="fa fa-search">Search</i>
            </button>
          </div>
          <Result  rentList={filteredRentList} saleList={filteredSaleList} />
        </div>
      </div>
      <RentHomeList />
      <SaleHomeList />
      <Team />
      <Footer />
      <button className="up-btn scroll-tp" onClick={scrollToTop}>
        👆
      </button>
    </section>
  );
};
