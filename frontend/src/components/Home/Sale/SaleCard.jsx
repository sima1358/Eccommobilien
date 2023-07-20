import React from "react";
import { forSale } from "../../../data/data.js";
import "./sale.css";
import { Link } from "react-router-dom";
import { Heading } from "../../Heading/Heading";

export const SaleCard = () => {
  return (
    <section className="sale-main-container">
      <Heading title="Please click on each File Number to see the pictures and details of each file" />

      <div className="sale-card-container">
        {forSale.map((value, index) => {
          const {
            id,
            type,
            fileNumber,
            location,
            m2,
            totalPrice,
            paymentDetails,
          } = value;
          return (
            <div className="sale-card-box" key={index}>
              <div className="sale-card">
              <Link className="Link" to={`/sale-card/${id}`}>
                    {fileNumber}
                  </Link>
                <div className="sale-card-content">
                  <h5>Title:{type} </h5>
                  <h5>File name:{fileNumber} </h5>
                  <h5>Location:{location} </h5>
                  <h5>M2:{m2} </h5>
                  <h5> {totalPrice}</h5>
                  <h5>Payment:{paymentDetails} </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
