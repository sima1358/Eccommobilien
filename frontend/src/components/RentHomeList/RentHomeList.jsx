import React from "react";
import "./rentHomeList.css";
import { rentHomeList } from "../../data/data";
import { Heading } from "../Heading/Heading";

export const RentHomeList = () => {
  return (
    <section className="rent">
      <Heading title="The best rent properties" />
      <div className="rentCard">
        {rentHomeList.map((value, index) => {
          const { cover, name, location, m2, pricePerMonth, depositPrice, type} =
            value;
          return (
            <div className="rent-content" key={index}>
              <div className="img">
                <img className="rentImg" src={cover} alt="" />
              </div>
              <div className="rent-card-property">
                <h4>{name} </h4>
                <p>Location: {location} </p>
                <p>M2: {m2} </p>
                <p>Price per month: {pricePerMonth} </p>
                <p>Deposit: {depositPrice} </p>
                <p>Type: {type} </p>
                 <button className="rent-btn">Click here</button>
        
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
