import React from "react";
import { forRent } from "../../../data/data.js";
import "./rent.css";
import { Link } from "react-router-dom";
import { Heading } from "../../Heading/Heading";

export const RentCard = () => {
  return (
    <section className="rent-main-container">
      <Heading title="Please click on each File Number to see the pictures and details of each file" />

      <div className="rent-card-container">
        {forRent.map((value, index) => {
          const {
            id,
            type,
            fileNumber,
            location,
            m2,
            pricePerMonth,
            depositPrice,
            from,
          } = value;
          return (
            <div className="rent-card-box" key={index}>
              <div className="rent-card">
                <div className="rent-card-content">
                  <Link className="Link" to={`/rent-card/${id}`}>
                    {fileNumber}
                  </Link>
                  <h5>Title:{type} </h5>
                  <h5>Location:{location}</h5>
                  <h5>M2:{m2} </h5>
                  <h5> {pricePerMonth}/Month </h5>
                  <h5>Deposit:{depositPrice} </h5>
                  <h5>From:{from} </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
